"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma = new client_1.PrismaClient();
async function main() {
    const profiles = [
        { label: 'Administrador', name: 'admin' },
        { label: 'Apoiador', name: 'supporter' },
    ];
    for (const profile of profiles) {
        const existingProfile = await prisma.role.findFirst({
            where: { name: profile.name },
        });
        if (!existingProfile) {
            await prisma.role.create({ data: profile });
        }
    }
    const user = await prisma.user.findFirst({
        where: { email: 'alexalexx3@gmail.com' },
    });
    if (!user) {
        const password = await bcrypt.hash('Administrador132', 10);
        await prisma.user.create({
            data: {
                email: 'alexalexx3@gmail.com',
                password,
                dateOfBirth: new Date(),
                phoneNumber: '31995554444',
                document: '12345678',
                firstName: 'Aleks',
                lastName: 'Vale',
                role: {
                    connect: {
                        name: 'admin',
                    },
                },
            },
        });
    }
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
//# sourceMappingURL=seed.js.map