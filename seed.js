import { PrismaClient } from "@prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import * as XLSX from "xlsx";
import { readFileSync } from "fs";

const adapter = new PrismaMariaDb({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "tourism_db",
  connectionLimit: 5,
});

const prisma = new PrismaClient({ adapter });

// قرأ الـ Excel
const workbook = XLSX.read(readFileSync("./travel_dataset.xlsx"));

function getSheet(name) {
  const ws = workbook.Sheets[name];
  return XLSX.utils.sheet_to_json(ws);
}

async function main() {
  console.log("🌱 Starting seed...");

  // 1. countries
  const countries = getSheet("countries");
  for (const row of countries) {
    await prisma.countries.upsert({
      where: { id: row.id },
      update: {},
      create: {
        id: row.id,
        cname: row.cname,
        cimage: row.cimage ?? null,
      },
    });
  }
  console.log(`✅ countries: ${countries.length} rows`);

  // 2. travel_types
  const travel_types = getSheet("travel_types");
  for (const row of travel_types) {
    await prisma.travel_types.upsert({
      where: { id: row.id },
      update: {},
      create: {
        id: row.id,
        tname: row.tname,
      },
    });
  }
  console.log(`✅ travel_types: ${travel_types.length} rows`);

  // 3. hotels
  const hotels = getSheet("hotels");
  for (const row of hotels) {
    await prisma.hotels.upsert({
      where: { id: row.id },
      update: {},
      create: {
        id: row.id,
        hotel_name: row.hotel_name,
        stars: row.stars,
      },
    });
  }
  console.log(`✅ hotels: ${hotels.length} rows`);

  // 4. flights
  const flights = getSheet("flights");
  for (const row of flights) {
    await prisma.flights.upsert({
      where: { id: row.id },
      update: {},
      create: {
        id: row.id,
        airline: row.airline,
        duration: row.duration,
      },
    });
  }
  console.log(`✅ flights: ${flights.length} rows`);

  // 5. users
  const users = getSheet("user");
  for (const row of users) {
    await prisma.users.upsert({
      where: { id: row.id },
      update: {},
      create: {
        id: row.id,
        first_name: row.first_name,
        last_name: row.last_name,
        email: row.email,
        phone: String(row.phone),
        password: row.password,
        profile_image: row.profile_image ?? null,
        created_at: new Date(row.created_at),
      },
    });
  }
  console.log(`✅ users: ${users.length} rows`);

  // 6. trips
  const trips = getSheet("trips");
  for (const row of trips) {
    await prisma.trips.upsert({
      where: { id: row.id },
      update: {},
      create: {
        id: row.id,
        title: row.title,
        description: row.description,
        price: row.price,
        duration: row.duration,
        rating: row.rating ?? 0,
        created_at: new Date(row.created_at),
        countries_id: row.country_id ?? null,
        travel_types_id: row.travel_type_id ?? null,
      },
    });
  }
  console.log(`✅ trips: ${trips.length} rows`);

  // 7. trip_images
  const trip_images = getSheet("trip_images");
  for (const row of trip_images) {
    await prisma.trip_images.upsert({
      where: { id: row.id },
      update: {},
      create: {
        id: row.id,
        trips_id: row.trip_id,
        image_url: row.image_url,
      },
    });
  }
  console.log(`✅ trip_images: ${trip_images.length} rows`);

  // 8. trip_dates
  const trip_dates = getSheet("trip_dates");
  for (const row of trip_dates) {
    await prisma.trip_dates.upsert({
      where: { id: row.id },
      update: {},
      create: {
        id: row.id,
        trips_id: row.trip_id,
        available_date: new Date(row.available_date),
      },
    });
  }
  console.log(`✅ trip_dates: ${trip_dates.length} rows`);

  // 9. bookings
  const bookings = getSheet("bookings");
  for (const row of bookings) {
    await prisma.bookings.upsert({
      where: { id: row.id },
      update: {},
      create: {
        id: row.id,
        user_id: row.user_id,
        trips_id: row.trip_id,
        travel_date: new Date(row.travel_date),
        travelers_count: row.travelers_count,
        total_price: row.total_price,
        status: row.status,
        created_at: new Date(row.created_at),
      },
    });
  }
  console.log(`✅ bookings: ${bookings.length} rows`);

  // 10. payments
  const payments = getSheet("payments");
  for (const row of payments) {
    await prisma.payments.upsert({
      where: { id: row.id },
      update: {},
      create: {
        id: row.id,
        bookings_id: row.booking_id,
        amount: row.amount,
        payment_method: row.payment_method,
        payment_status: row.payment_status,
        created_at: new Date(row.created_at),
      },
    });
  }
  console.log(`✅ payments: ${payments.length} rows`);

  // 11. review
  const reviews = getSheet("review");
  for (const row of reviews) {
    await prisma.review.upsert({
      where: { id: row.id },
      update: {},
      create: {
        id: row.id,
        user_id: row.user_id,
        trips_id: row.trip_id,
        rating: row.rating,
        comment: row.comment ?? null,
        created_at: new Date(row.created_at),
      },
    });
  }
  console.log(`✅ review: ${reviews.length} rows`);

  // 12. includes
  const includes = getSheet("includes");
  for (const row of includes) {
    await prisma.includes.create({
      data: {
        trips_id: row.trip_id,
        hotels_id: row.hotel_id,
      },
    });
  }
  console.log(`✅ includes: ${includes.length} rows`);

  // 13. uses
  const uses = getSheet("uses");
  for (const row of uses) {
    await prisma.uses.create({
      data: {
        trips_id: row.trip_id,
        flights_id: row.flight_id,
      },
    });
  }
  console.log(`✅ uses: ${uses.length} rows`);

  // 14. contact_messages
  const messages = getSheet("contact_messages");
  for (const row of messages) {
    await prisma.contact_messages.upsert({
      where: { id: row.id },
      update: {},
      create: {
        id: row.id,
        message_name: row.message_name,
        email: row.email,
        subject: row.subject,
        created_at: new Date(row.created_at),
      },
    });
  }
  console.log(`✅ contact_messages: ${messages.length} rows`);

  console.log("\n🎉 Seed completed! 545 records inserted.");
}

main()
  .catch((e) => {
    console.error("❌ Error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });