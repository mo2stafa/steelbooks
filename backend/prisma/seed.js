import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed...");


    await prisma.salesPayment.deleteMany();
  await prisma.salesInvoiceLine.deleteMany();
  await prisma.salesInvoice.deleteMany();
  await prisma.salesQuoteLine.deleteMany();
  await prisma.salesQuote.deleteMany();
  await prisma.item.deleteMany();
  await prisma.customer.deleteMany();





  // --- Customers ---
const customer1 = await prisma.customer.create({
  data: {
    name: "Ahmed Ali",
    phone: "01001234567",
    email: "ahmed@example.com",
    address: "Cairo, Egypt",
  },
});

const customer2 = await prisma.customer.create({
  data: {
    name: "Sara Mohamed",
    phone: "01007654321",
    email: "sara@example.com",
    address: "Alexandria, Egypt",
  },
});

const item1 = await prisma.item.create({
  data: {
    name: "Stainless Steel Pipe",
    price: 500,
    description: "High-quality stainless steel pipe",
  },
});

const item2 = await prisma.item.create({
  data: {
    name: "Carbon Steel Flange",
    price: 200,
    description: "Durable carbon steel flange",
  },
});


  // --- Sales Quotes ---
  const quote1 = await prisma.salesQuote.create({
    data: {
      number: "SQ-0001",
      customerId: customer1.id,
      date: new Date(),
      total: 900,
      status: "SENT",
      lines: {
        create: [
          {
            description: item1.name,
            qty: 1,
            unitPrice: item1.price,
            lineTotal: item1.price,
          },
          {
            description: item2.name,
            qty: 2,
            unitPrice: item2.price,
            lineTotal: item2.price * 2,
          },
        ],
      },
    },
  });

  const quote2 = await prisma.salesQuote.create({
    data: {
      number: "SQ-0002",
      customerId: customer2.id,
      date: new Date(),
      total: 500,
      status: "DRAFT",
      lines: {
        create: [
          {
            description: item2.name,
            qty: 2,
            unitPrice: item2.price,
            lineTotal: item2.price * 2,
          },
        ],
      },
    },
  });


  const invoice1 = await prisma.salesInvoice.create({
    data: {
      number: "INV-001",
      customerId: customer1.id,
      date: new Date("2025-11-08"),
      total: 2000,
      status: "PAID",
      lines: {
        create: [
          { description: "Item 1", qty: 2, unitPrice: 500, lineTotal: 1000 },
          { description: "Item 2", qty: 2, unitPrice: 500, lineTotal: 1000 },
        ],
      },
      payments: {
        create: [
          { date: new Date("2025-11-08"), amount: 2000, method: "Cash" },
        ],
      },
    },
  });

  const invoice2 = await prisma.salesInvoice.create({
    data: {
      number: "INV-002",
      customerId: customer2.id,
      date: new Date(),
      total: 700,
      status: "PAID",
      lines: {
        create: [
          {
            description: item2.name,
            qty: 2,
            unitPrice: item2.price,
            lineTotal: 400,
          },
          {
            description: item1.name,
            qty: 1,
            unitPrice: item1.price,
            lineTotal: 300,
          },
        ],
      },
    },
  });


    const supplier1 = await prisma.supplier.create({
    data: { name: "Metal Supply Co.", phone: "01011112222" },
  });

  const supplier2 = await prisma.supplier.create({
    data: { name: "Steel Traders", phone: "01033334444" },
  });

  // --- Purchase Invoices ---
  const pInvoice1 = await prisma.purchaseInvoice.create({
    data: {
      number: "PINV-001",
      supplierId: supplier1.id,
      date: new Date("2025-11-08"),
      total: 5000,
      status: "DRAFT",
      lines: {
        create: [
          { description: "Steel Pipes", qty: 10, unitPrice: 300, lineTotal: 3000 },
          { description: "Valves", qty: 4, unitPrice: 500, lineTotal: 2000 },
        ],
      },
      payments: {
        create: [], // No payment yet
      },
    },
  });

  const pInvoice2 = await prisma.purchaseInvoice.create({
    data: {
      number: "PINV-002",
      supplierId: supplier2.id,
      date: new Date("2025-11-09"),
      total: 3000,
      status: "PARTIAL",
      lines: {
        create: [{ description: "Carbon Steel Sheets", qty: 6, unitPrice: 500, lineTotal: 3000 }],
      },
      payments: {
        create: [{ date: new Date("2025-11-09"), amount: 2000, method: "Bank Transfer" }],
      },
    },
  });


  


  console.log("✅ Seeding complete!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
