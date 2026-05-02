import { prisma } from "../prisma.js";

export const getCountries = async (req, res) => {
  try {
    const countries = await prisma.countries.findMany();
    res.json(countries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTravelTypes = async (req, res) => {
  try {
    const types = await prisma.travel_types.findMany();
    res.json(types);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};