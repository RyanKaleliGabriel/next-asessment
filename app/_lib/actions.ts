"use server";

import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";
import { upload } from "../_utils/upload";
import {
  validateAdmin,
  validateBranch,
  validateCategory,
  validateDivision,
  validatePasswords,
  validateProduct,
  validateShop,
  validateTechnicalDescriptions,
  validateUpdateBranch,
  validateUpdateProduct,
  validateUserData,
} from "../_utils/validators";

import { cookies } from "next/headers";
import { capitalise } from "../_utils/helpers";
import { signOut } from "./auth";
import { getProduct } from "./data-service";
import { prisma } from "./prisma";

interface FormData {
  get(name: string): string | null;
}

const BASE_URL = process.env.BASE_URL;

export async function createCategory(formData: any): Promise<void> {
  try {
    //Category Declaration
    const newCategory = {
      name: String(formData.get("name")),
      display: String(formData.get("display")),
    };

    //Error Handling
    const errorMessages: string[] = validateCategory(newCategory);
    if (errorMessages.length > 0) {
      throw new Error(errorMessages.join(". "));
    }

    // Check if an active or inactive division with the same name already exists
    const existingCategory = await prisma.category.findFirst({
      where: {
        name: newCategory.name,
      },
    });

    if (existingCategory) {
      if (existingCategory.active) {
        throw new Error(
          `Category with name '${newCategory.name}' already exists`
        );
      } else {
        await prisma.category.update({
          where: {
            id: existingCategory.id,
          },
          data: {
            active: true,
            display: newCategory.display,
          },
        });
      }
      return;
    }

    //DB Action
    await prisma.category.create({
      data: newCategory,
    });
  } catch (error: any) {
    throw new Error(error.message);
  } finally {
    revalidatePath("/hawkvisi/category");
  }
}

export async function updateCategory(formData: any): Promise<void> {
  try {
    //Category Declaration
    const id = Number(formData.get("id"));
    const newCategory = {
      name: String(formData.get("name")),
      display: String(formData.get("display")),
    };

    //Error Handling
    const errorMessages: string[] = validateCategory(newCategory);
    if (errorMessages.length > 0) {
      throw new Error(errorMessages.join(". "));
    }

    // Check if an active or inactive division with the same name already exists
    const existingCategory = await prisma.category.findFirst({
      where: {
        name: newCategory.name,
      },
    });

    if (existingCategory) {
      if (existingCategory.active) {
        throw new Error(
          `Category with name '${newCategory.name}' already exists`
        );
      } else {
        await prisma.category.update({
          where: {
            id: existingCategory.id,
          },
          data: {
            active: true,
            display: newCategory.display,
          },
        });
      }
      return;
    }

    //DB Action
    await prisma.category.update({
      where: {
        id: id,
      },
      data: newCategory,
    });
  } catch (error: any) {
    throw new Error(error.message);
  } finally {
    revalidatePath("/hawkvisi/category");
  }
}

export async function deleteCategory(categoryId: number) {
  try {
    await prisma.category.update({
      where: {
        id: categoryId,
      },
      data: {
        active: false,
      },
    });
  } catch (error: any) {
    console.error("Failed to delete", error);
  } finally {
    revalidatePath("/hawkvisi/category");
  }
}

export async function createDivision(formData: any): Promise<void> {
  try {
    const newDivision = {
      name: String(formData.get("name")),
      categoryId: Number(formData.get("categoryId")),
    };

    const errorMessages: string[] = validateDivision(newDivision);
    if (errorMessages.length > 0) {
      throw new Error(errorMessages.join(". "));
    }

    // Check if an active or inactive division with the same name already exists
    const existingDivision = await prisma.division.findFirst({
      where: {
        name: newDivision.name,
      },
    });

    if (existingDivision) {
      if (existingDivision.active) {
        throw new Error(
          `Division with name '${newDivision.name}' already exists`
        );
      } else {
        const updatedDivision = await prisma.division.update({
          where: {
            id: existingDivision.id,
          },
          data: {
            active: true,
            categoryId: newDivision.categoryId,
          },
        });
      }
      return;
    }

    // Create a new division if no existing division is found
    const div = await prisma.division.create({ data: newDivision });
  } catch (error: any) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      throw new Error(`Division name '${formData.get("name")}' already exists`);
    }
    throw new Error(error.message);
  } finally {
    revalidatePath("/hawkvisi/division");
  }
}

export async function deleteDivision(divisionId: number) {
  try {
    await prisma.division.update({
      where: {
        id: divisionId,
      },
      data: {
        active: false,
      },
    });
  } catch (error: any) {
    throw new Error(error.message);
  } finally {
    revalidatePath("/hawkvisi/division");
  }
}

export async function updateDivision(formData: any): Promise<void> {
  try {
    const id = Number(formData.get("id"));
    const newDivision = {
      name: String(formData.get("name")),
      categoryId: Number(formData.get("categoryId")),
    };

    const errorMessages: string[] = validateDivision(newDivision);
    if (errorMessages.length > 0) {
      throw new Error(errorMessages.join(". "));
    }

    const division = await prisma.division.update({
      where: {
        id: id,
      },
      data: newDivision,
    });
  } catch (error: any) {
    throw new Error(error.message);
  } finally {
    revalidatePath("/hawkvisi/division/");
  }
}

export async function createShop(formData: any): Promise<void> {
  try {
    const file: File | null = formData.get("photo") as unknown as File;
    const newShop = {
      name: String(formData.get("name")),
      description: String(formData.get("description")),
      logo: file.name,
    };
    //Error Handling
    const errorMessages: string[] = validateShop(newShop, file);
    if (errorMessages.length > 0) {
      throw new Error(errorMessages.join(". "));
    }

    //Upload Image
    await upload(file, "shop");

    const response = await fetch(`${BASE_URL}/shops`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newShop),
    });

    if (!response.ok) {
      throw new Error("Failed to create shop.");
    }

    const shop = await response.json();
    return shop;
  } catch (error: any) {
    throw new Error(error.message);
  } finally {
    revalidatePath("/shops");
  }
}

export async function deleteShop(shopId: number) {

  try {
    console.log(shopId)
    const response = await fetch(`${BASE_URL}/shops/${shopId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete shop");
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  } finally {
    revalidatePath("/shops");
  }
}

export async function createBranch(formData: any): Promise<void> {
  try {
    // Variable Declarations
    const file: File | null = formData.get("image_url") as unknown as File;

    const newBranch = {
      name: String(formData.get("name")),
      location: String(formData.get("location")),
      email: String(formData.get("email")),
      phone: String(formData.get("phone")),
      county: String(formData.get("county")),
      image_url: file ? file.name : "",
    };

    //Error Handling
    const errorMessages: string[] = validateBranch(newBranch, file);
    if (errorMessages.length > 0) {
      throw new Error(errorMessages.join(". "));
    }

    //Upload Image
    await upload(file, "branch");

    // Add to Database
    const branch = await prisma.branch.create({
      data: newBranch,
    });
  } catch (error: any) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      throw new Error(`Branch email '${formData.get("email")}' already exists`);
    }
    throw new Error(error.message);
  } finally {
    revalidatePath("/hawkvisi/branch");
  }
}

export async function updateShop(formData: any): Promise<void> {
  try {
    // Variable Declarations
    const file: File | null = formData.get("photo") as unknown as File;
    const id = formData.get("id");

    if (file.name === "undefined") {
      const newBranch = {
        name: String(formData.get("name")),
        photo: String(formData.get("current_image")),
        description: String(formData.get("description")),
      };

      // Error Handling
      const errorMessages: string[] = validateUpdateShop(newBranch);
      if (errorMessages.length > 0) {
        throw new Error(errorMessages.join(". "));
      }

      //DB Action
      const branch = await prisma.branch.update({
        where: {
          id: Number(id),
        },
        data: newBranch,
      });
    } else {
      const newBranch = {
        name: String(formData.get("name")),
        description: String(formData.get("description")),
        photo: file ? file.name : "",
      };

      // Error Handling
      const errorMessages: string[] = validateShop(newBranch, file);
      if (errorMessages.length > 0) {
        throw new Error(errorMessages.join(". "));
      }

      //Upload Image
      await upload(file, "shop");

      //DB ACTION
      const branch = await prisma.branch.update({
        where: {
          id: Number(id),
        },
        data: newBranch,
      });
    }
  } catch (error: any) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      throw new Error(`Branch email '${formData.get("email")}' already exists`);
    }
    throw new Error(error.message);
  } finally {
    revalidatePath("/hawkvisi/branches");
  }
}

export async function deleteBranch(branchId: number) {
  try {
    const branch = await prisma.branch.delete({
      where: {
        id: branchId,
      },
    });
  } catch (error: any) {
    throw new Error(error.message);
  } finally {
    revalidatePath("/hawkvisi/branch");
  }
}

export async function createProduct(formData: any): Promise<void> {
  try {
    // Variable Declaration
    const file: File | null = formData.get("image_url") as unknown as File;

    //DATA TO GO TO PRODUCT TABLE
    const newProduct = {
      name: String(formData.get("name")),
      serialNumber: String(formData.get("serialNumber")).toUpperCase(),
      cDescription: String(formData.get("cDescription")),
      price: Number(formData.get("price")),
      discount: Number(formData.get("discount")),
      image_url: file ? file.name : "",
      display: String(formData.get("display")),
      categoryId: Number(formData.get("categoryId")),
      divisionId: Number(formData.get("divisionId")),
      manufacturerId: Number(formData.get("manufacturerId")),
    };

    //DATA TO GO TO TECHNICAL DESCRIPTION TABLE
    const technicalDescriptions: string[] = [];
    formData.forEach((value: string, key: string) => {
      if (key.startsWith("tdescription-")) {
        technicalDescriptions.push(value);
      }
    });

    //Product Error Handling
    const errorMessages: string[] = validateProduct(newProduct, file);
    if (errorMessages.length > 0) {
      throw new Error(errorMessages.join(". "));
    }

    // Technical Descriptions Validation
    const eMessages: string[] = validateTechnicalDescriptions(
      technicalDescriptions
    );
    if (eMessages.length > 0) {
      throw new Error(eMessages.join(". "));
    }

    // upload image
    await upload(file, "product");

    //Create Product first
    const createdProduct = await prisma.product.create({ data: newProduct });

    //Insert Technical descriptions
    const tDescriptions = technicalDescriptions.map((desc) => ({
      description: desc,
      productId: createdProduct.id,
    }));

    await prisma.technicalDescription.createMany({
      data: tDescriptions,
    });
  } catch (error: any) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      throw new Error(
        `Product serial number '${formData.get("serialNumber")}' already exists`
      );
    }
    throw new Error(error.message);
  } finally {
    revalidatePath("/hawkvisi/products/");
  }
}

export async function deleteProduct(productId: number) {
  try {
    await prisma.$transaction(async (prisma) => {
      await prisma.technicalDescription.deleteMany({
        where: {
          productId: productId,
        },
      });

      await prisma.product.delete({
        where: {
          id: productId,
        },
      });
    });
  } catch (error: any) {
    throw new Error(error.message);
  } finally {
    revalidatePath("/hawkvisi/products");
  }
}

export async function UpdateProduct(formData: any): Promise<void> {
  try {
    const file: File | null = formData.get("image_url") as unknown as File;
    const id = formData.get("id");
    if (file.name === "undefined") {
      // DATA TO GO TO THE PRODUCT TABLE
      const newProduct = {
        name: String(formData.get("name")),
        serialNumber: String(formData.get("serialNumber")).toUpperCase(),
        cDescription: String(formData.get("cDescription")),
        price: Number(formData.get("price")),
        discount: Number(formData.get("discount")),
        image_url: formData.get("current_image"),
        display: String(formData.get("display")),
        categoryId: Number(formData.get("categoryId")),
        divisionId: Number(formData.get("divisionId")),
        manufacturerId: Number(formData.get("manufacturerId")),
      };

      // DATA TO GO TO THE TECHNICAL DESCRIPTION TABLE
      const technicalDescriptions: string[] = [];
      const initialTechnicalDescriptions: object[] = [];
      const newTechnicalDescriptions: object[] = [];
      // formData.entries(): This method returns an iterator of the
      // form's key-value pairs, allowing you to destructure and iterate over them with for...of.

      // await inside for...of: This ensures that the asynchronous findUnique operation is awaited properly within the loop.
      for (const [key, value] of formData.entries()) {
        if (key.startsWith("tdescription-")) {
          technicalDescriptions.push(value);
          const tId = Number(key.split("-")[1]);

          const technicalDescription =
            await prisma.technicalDescription.findUnique({
              where: {
                id: tId,
              },
            });

          if (technicalDescription) {
            initialTechnicalDescriptions.push({
              ...technicalDescription,
              newDescription: value,
            });
          } else {
            newTechnicalDescriptions.push({
              productId: Number(id),
              description: value,
            });
          }
        }
      }

      // Look for all technical descriptions
      const savedDescriptions = await prisma.technicalDescription.findMany({
        where: {
          productId: Number(id),
          active: true,
        },
      });

      // This line iterates over the savedDescriptions array, extracting the id property from each desc object.
      // A Set is a collection of unique values, which means it will automatically remove any duplicate IDs (although there shouldn't be any in this context).
      const savedIds = new Set(savedDescriptions.map((desc) => desc.id));

      // For each id in the savedIds array, it checks whether the initialIds Set does not contain the id (!initialIds.has(id)).
      const initialIds = new Set(
        initialTechnicalDescriptions.map((desc: any) => desc.id)
      );

      const IdsToDelete = Array.from(savedIds).filter(
        (id) => !initialIds.has(id)
      );

      // Error Handling
      const errorMessages: string[] = validateUpdateProduct(newProduct);
      if (errorMessages.length > 0) {
        throw new Error(errorMessages.join(". "));
      }

      // Technical Descriptions Validation
      const eMessages: string[] = validateTechnicalDescriptions(
        technicalDescriptions
      );
      if (eMessages.length > 0) {
        throw new Error(eMessages.join(". "));
      }

      //DB ACTION
      const product = await prisma.product.update({
        where: {
          id: Number(id),
        },
        data: newProduct,
      });

      if (IdsToDelete.length > 0) {
        await prisma.technicalDescription.deleteMany({
          where: {
            id: {
              in: IdsToDelete,
            },
          },
        });
      }

      if (initialTechnicalDescriptions.length > 0) {
        await Promise.all(
          initialTechnicalDescriptions.map(async (description: any) => {
            await prisma.technicalDescription.update({
              where: {
                id: description.id,
              },
              data: {
                description: description.newDescription, //Update fields as needed
                //Add other fields to update
              },
            });
          })
        );
      }

      if (newTechnicalDescriptions.length > 0) {
        await Promise.all(
          newTechnicalDescriptions.map(async (description: any) => {
            await prisma.technicalDescription.create({
              data: {
                productId: description.productId,
                description: description.description,
              },
            });
          })
        );
      }
    } else {
      //DATA TO GO TO THE PRODUCT
      const newProduct = {
        name: String(formData.get("name")),
        serialNumber: String(formData.get("serialNumber")),
        cDescription: String(formData.get("cDescription")),
        price: Number(formData.get("price")),
        discount: Number(formData.get("discount")),
        image_url: file ? file.name : "",
        display: String(formData.get("display")),
        categoryId: Number(formData.get("categoryId")),
        divisionId: Number(formData.get("divisionId")),
        manufacturerId: Number(formData.get("manufacturerId")),
      };

      // DATA TO GO TO THE TECHNICAL DESCRIPTION TABLE
      const technicalDescriptions: string[] = [];
      const initialTechnicalDescriptions: object[] = [];
      const newTechnicalDescriptions: object[] = [];
      // formData.entries(): This method returns an iterator of the
      // form's key-value pairs, allowing you to destructure and iterate over them with for...of.

      // await inside for...of: This ensures that the asynchronous findUnique operation is awaited properly within the loop.
      for (const [key, value] of formData.entries()) {
        if (key.startsWith("tdescription-")) {
          technicalDescriptions.push(value);
          const tId = Number(key.split("-")[1]);

          const technicalDescription =
            await prisma.technicalDescription.findUnique({
              where: {
                id: tId,
              },
            });

          if (technicalDescription) {
            initialTechnicalDescriptions.push({
              ...technicalDescription,
              newDescription: value,
            });
          } else {
            newTechnicalDescriptions.push({
              productId: Number(id),
              description: value,
            });
          }
        }
      }

      // Look for all technical descriptions
      const savedDescriptions = await prisma.technicalDescription.findMany({
        where: {
          productId: Number(id),
          active: true,
        },
      });

      // This line iterates over the savedDescriptions array, extracting the id property from each desc object.
      // A Set is a collection of unique values, which means it will automatically remove any duplicate IDs (although there shouldn't be any in this context).
      const savedIds = new Set(savedDescriptions.map((desc) => desc.id));

      // For each id in the savedIds array, it checks whether the initialIds Set does not contain the id (!initialIds.has(id)).
      const initialIds = new Set(
        initialTechnicalDescriptions.map((desc: any) => desc.id)
      );

      const IdsToDelete = Array.from(savedIds).filter(
        (id) => !initialIds.has(id)
      );

      //ERROR HANDLING FOR THE PRODUCT
      const errorMessages: string[] = validateUpdateProduct(newProduct);
      if (errorMessages.length > 0) {
        throw new Error(errorMessages.join(". "));
      }

      //ERROR HANDLING FOR THE DESCRIPTIONS
      const eMessages: string[] = validateTechnicalDescriptions(
        technicalDescriptions
      );
      if (eMessages.length > 0) {
        throw new Error(eMessages.join(". "));
      }

      //IMAGE UPDLOAD
      await upload(file, "product");

      //PRODUCT MUTATION
      const product = await prisma.product.update({
        where: {
          id: Number(id),
        },
        data: newProduct,
      });

      if (IdsToDelete.length > 0) {
        await prisma.technicalDescription.deleteMany({
          where: {
            id: {
              in: IdsToDelete,
            },
          },
        });
      }

      if (initialTechnicalDescriptions.length > 0) {
        await Promise.all(
          initialTechnicalDescriptions.map(async (description: any) => {
            await prisma.technicalDescription.update({
              where: {
                id: description.id,
              },
              data: {
                description: description.newDescription, //Update fields as needed
                //Add other fields to update
              },
            });
          })
        );
      }

      if (newTechnicalDescriptions.length > 0) {
        await Promise.all(
          newTechnicalDescriptions.map(async (description: any) => {
            await prisma.technicalDescription.create({
              data: {
                productId: description.productId,
                description: description.description,
              },
            });
          })
        );
      }
    }
  } catch (error: any) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      throw new Error(
        `Product serial number '${formData.get("serialNumber")}' already exists`
      );
    }
    // console.error(error)
    throw new Error(error.message);
  } finally {
    revalidatePath("/hawkvisi/products/");
  }
}

export async function createAdmin(formData: any): Promise<void> {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    let newUser = {
      name,
      email,
      password,
      image_url: "default.png",
    };

    const errorMessages: string[] = validateAdmin(newUser);
    if (errorMessages.length > 0) {
      throw new Error(errorMessages.join(". "));
    }

    const encyrptedPass = await bcrypt.hash(newUser.password, 12);
    newUser = { ...newUser, password: encyrptedPass };

    await prisma.user.create({
      data: newUser,
    });
  } catch (error: any) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      throw new Error(`Email '${formData.get("email")}' already exists.`);
    }
    throw new Error(error.message);
  } finally {
    revalidatePath("/hawkvisi/admins/");
  }
}

// export async function Login(formData: any): Promise<void> {
//   try {
//     const email = String(formData.get("email"));
//     const password = String(formData.get("password"));

//     const newUser = { email, password };

//     // Input validation
//     const errorMessages: string[] = validateCredentials(newUser);
//     if (errorMessages.length > 0) {
//       throw new Error(errorMessages.join(". "));
//     }

//     const admin = await getAdmin(email);
//     if (!admin || !(await bcrypt.compare(password, admin.password))) {
//       throw new Error("Invalid email or password");
//     }
//     // await signIn("credentials", { redirect: false, ...newUser });
//     const res = await signIn("credentials", { redirect: false, ...newUser });
//     console.log(res);
//   } catch (error: any) {
//     throw new Error(error.message);
//   }
// }

export async function logOut() {
  await signOut({ redirectTo: "/hawkvisilogin" });
}

export async function UpdateProfileData(formData: any): Promise<void> {
  try {
    const file: File | null = formData.get("image_url") as unknown as File;
    const id = formData.get("id");
    const name = String(formData.get("name"));

    if (file.name === "undefined") {
      const image_url = String(formData.get("current_image"));
      const updateUserData = {
        name,
        image_url,
      };

      const errorMessages: string[] = validateUserData(updateUserData);
      if (errorMessages.length > 0) {
        throw new Error(errorMessages.join(". "));
      }

      await prisma.user.update({
        where: {
          id: Number(id),
        },
        data: updateUserData,
      });
    } else {
      const image_url = file.name;
      const updateUserData = {
        name,
        image_url,
      };

      const errorMessages: string[] = validateUserData(updateUserData);
      if (errorMessages.length > 0) {
        throw new Error(errorMessages.join(". "));
      }
      await upload(file, "user");
      await prisma.user.update({
        where: {
          id: Number(id),
        },
        data: updateUserData,
      });
    }
  } catch (error: any) {
    throw new Error(error.message);
  } finally {
    revalidatePath("/hawkvisi/");
  }
}

export async function updatePassword(formData: any): Promise<void> {
  try {
    const id = String(formData.get("id"));
    const newPassword = String(formData.get("newPassword"));
    const confirmPassword = String(formData.get("confirmPassword"));

    const errorMessages: string[] = validatePasswords(
      newPassword,
      confirmPassword
    );
    if (errorMessages.length > 0) {
      throw new Error(errorMessages.join(". "));
    }

    const encyrptedPass = await bcrypt.hash(newPassword, 12);

    const user = {
      password: encyrptedPass,
    };

    await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: user,
    });
  } catch (error: any) {
    throw new Error(error.message);
  } finally {
    revalidatePath("/hawkvisi/");
  }
}

export async function deactivateAccount(id: number) {
  try {
    await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        active: false,
      },
    });
  } catch (error: any) {
    throw new Error(error.message);
  } finally {
    revalidatePath("/hawkvisi/");
  }
}

// export async function comparisonCookies(id: string) {
//   try {
//     const cookie = cookies();
//     const product = await getProduct(id);
//     if (!product) {
//       throw new Error("Product not found");
//     }
//     cookie.set({
//       name: `hawkvisiprod-${product.id}`,
//       value: String(product?.id),
//       httpOnly: true,
//       path: "/",
//     });
//   } catch (error: any) {
//     throw new Error(error.message);
//   } finally {
//     revalidatePath("/");
//   }
// }

// export async function deleteCookies(id: string) {
//   try {
//     const cookie = cookies();
//     const product = await getProduct(id);
//     if (!product) {
//       throw new Error("Product not found");
//     }

//     const cookieName = `hawkvisiprod-${product.id}`;
//     cookie.delete(cookieName);
//   } catch (error: any) {
//     throw new Error(error.message);
//   } finally {
//     revalidatePath("/");
//     // revalidatePath("/categories");
//     // revalidatePath("/products");
//   }
// }
