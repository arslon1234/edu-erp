import { Form, Field, ErrorMessage, configure, defineRule } from "vee-validate";
import { required, min, max, email } from "@vee-validate/rules";

export default{
    install(app){
        app.component("VeeForm", Form)
        app.component("VeeField", Field)
        app.component("ErrorMessage", ErrorMessage)

        defineRule("required", required)
        defineRule("min", min)
        defineRule("max", max)
        defineRule("email", email)
        defineRule("day_active", (value)=>{
            if(value == true || value == false){
                return ''
            }else {
                return 'The field Day is required'
            }
            
        })
        configure({
            generateMessage:(ctx)=>{
                const messages = {
                    required: `The field ${ctx.field} is required`,
                    min: `The field ${ctx.field} is too short`,
                    max: `The field ${ctx.field} is too long`,
                    email: `The field ${ctx.field} is too long`,
                }
                return messages[(ctx.rule.name)] ? messages[(ctx.rule.name)] : `${ctx} kiritilmadi`
            },
            validateOnBlur: true,
            validateOnChange: true,
            validateOnModelUpdate: true,
            validateOnInput: true
        })

    }
}