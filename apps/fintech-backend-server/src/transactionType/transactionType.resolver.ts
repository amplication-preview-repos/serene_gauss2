import * as graphql from "@nestjs/graphql";
import { TransactionTypeResolverBase } from "./base/transactionType.resolver.base";
import { TransactionType } from "./base/TransactionType";
import { TransactionTypeService } from "./transactionType.service";

@graphql.Resolver(() => TransactionType)
export class TransactionTypeResolver extends TransactionTypeResolverBase {
  constructor(protected readonly service: TransactionTypeService) {
    super(service);
  }
}
