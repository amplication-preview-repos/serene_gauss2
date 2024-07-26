import { Module } from "@nestjs/common";
import { TransactionTypeModuleBase } from "./base/transactionType.module.base";
import { TransactionTypeService } from "./transactionType.service";
import { TransactionTypeController } from "./transactionType.controller";
import { TransactionTypeResolver } from "./transactionType.resolver";

@Module({
  imports: [TransactionTypeModuleBase],
  controllers: [TransactionTypeController],
  providers: [TransactionTypeService, TransactionTypeResolver],
  exports: [TransactionTypeService],
})
export class TransactionTypeModule {}
