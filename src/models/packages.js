import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export const createPackage = async (packageData) => {
  const packageCreated = await client.packages.create({
    data: packageData
  });
  return packageCreated
}

export const getAllPackages = async (packageData) => {
  return await client.packages.findMany({
    data: packageData
  })
}

export const deletePackage = async (id) => {
  await client.packages.delete({
    where: {
      id
    }
  })
  console.log('Package deleted id:', id)
}

export const updatePackage = async (id, data) => {
  const updatePackageData = await client.packages.update({
    where: {
      id
    },
    data,
    select: {
      title: true,
      valuePerPerson: true,
    }
  })
  return updatePackageData;
}