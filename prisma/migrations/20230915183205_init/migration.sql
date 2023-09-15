-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "nick_name" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);
