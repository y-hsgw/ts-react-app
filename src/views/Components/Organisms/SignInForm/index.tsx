import * as React from "react";

//  styles
import { InputWrapper, Wrapper } from "./styles";

//  atomic component
import { StyledOutlinedInput } from "~views/Components/Atoms/StyledOutlinedInput";

// types
import { SignInFormProps } from "./types";

export const SignInForm: React.FC<SignInFormProps> = props => {
  return (
    <Wrapper>
      <InputWrapper>
        <StyledOutlinedInput
          fullWidth
          placeholder={"メールアドレス"}
          name={"email"}
          value={props.emailValue}
        />
      </InputWrapper>
      <InputWrapper>
        <StyledOutlinedInput
          fullWidth
          placeholder={"パスワード"}
          name={"text"}
          value={props.passwordValue}
        />
      </InputWrapper>
    </Wrapper>
  );
};
