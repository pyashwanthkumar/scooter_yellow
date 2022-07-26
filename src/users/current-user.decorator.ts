import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { UserResponse } from "./dto/response/user-response.dto";


const getCurrentUserByContext = (context : ExecutionContext) : UserResponse => {
    console.log("reaching here decorator user")
    return context.switchToHttp().getRequest().user
}

export const CurrentUser = createParamDecorator(
    (_data: unknown, context : ExecutionContext) =>
        getCurrentUserByContext(context),
)
