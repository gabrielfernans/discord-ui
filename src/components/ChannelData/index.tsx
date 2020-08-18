import React from "react";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
    return (
        <Container>
            <Messages />

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #general-mourao" />
                <InputIcon />
            </InputWrapper>
        </Container>
    );
};

export default ChannelData;
