import { join } from "path";
import { promises as fs } from "fs";

export async function upload(file: File, location: string) {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const directory = join("public/uploads", location);
  const path = join(directory, file.name);

  // Ensure the directory exists
  await fs.mkdir(directory, { recursive: true });
  // Write the file to the specified path
  await fs.writeFile(path, buffer);
  // console.log(`Open ${path} to see the uploaded file`);
}
