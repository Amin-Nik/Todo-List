"use server";
import { PrismaClient } from "@prisma/client";
import { revalidateTag } from "next/cache";
const prisma = new PrismaClient();

export async function addNewLabel(labelData: string[], newLabel: string) {
  try {
    const label = await prisma.user.update({
      where: {
        id: "67c9dcc075cddd2f8bc99e69",
      },
      data: {
        labels: [...labelData, newLabel],
      },
    });
    revalidateTag("label");
    return label;
  } catch (error) {
    console.log(error);
  }
}
