import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AddressService } from "./address.service";
import { AddressControllerBase } from "./base/address.controller.base";

@swagger.ApiTags("addresses")
@common.Controller("addresses")
export class AddressController extends AddressControllerBase {
  constructor(
    protected readonly service: AddressService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
