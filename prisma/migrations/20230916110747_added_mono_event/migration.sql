-- CreateTable
CREATE TABLE "MonoEvent" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "text" TEXT NOT NULL,

    CONSTRAINT "MonoEvent_pkey" PRIMARY KEY ("id")
);
