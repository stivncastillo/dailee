import { SetMetadata } from "@nestjs/common";

export const NotPublic = () => SetMetadata("isPublic", false);
