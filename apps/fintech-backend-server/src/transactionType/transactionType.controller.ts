import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TransactionTypeService } from "./transactionType.service";
import { TransactionTypeControllerBase } from "./base/transactionType.controller.base";

@swagger.ApiTags("transactionTypes")
@common.Controller("transactionTypes")
export class TransactionTypeController extends TransactionTypeControllerBase {
  constructor(protected readonly service: TransactionTypeService) {
    super(service);
  }
}
