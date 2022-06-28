import React from 'react'
import NavBar from '../../components/navbar/NavBar';
import {
  CtForm,
  Input,
  CtInput,
  BtCreate,
  Ct,
  InputDescription,

} from "./MomentForm.styled";

function MomentForm() {

    return (

        <>
        <NavBar/>
            <Ct>
              <CtForm>
                <CtInput>
                  <Input
                    name="imgUrl"
                    type="url"
                    placeholder="Img url here..."
                  ></Input>
                  <Input
                    name="title"
                    type="text"
                    placeholder="Title..."
                  ></Input>
                  <InputDescription
                    name="description"
                    placeholder="Text description..."
                  ></InputDescription>
                    <BtCreate type="submit" className="submitBtn">
                      <i className="fa-solid fa-circle-plus fa-2xl"></i>
                    </BtCreate>
                </CtInput>
                </CtForm>
                </Ct>
            </>
        )   
    };

export default MomentForm