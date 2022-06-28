import React from 'react'
import NavBar from '../navbar/NavBar';
import {
  CtForm,
  Input,
  CtInput,
  BtEdit,
  Ct,
  BtCancel,
  InputDescription,

} from "./Update.styled";

function Update() {

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
                    <BtEdit type="submit" className="BtEdit">
                      <i className="fa-solid fa-pen-to-square fa-2xl"></i>
                    </BtEdit>
                    <BtCancel type="submit" className="BtCancel">
                      <i className="fa-solid fa-circle-plus fa-2xl"></i>
                    </BtCancel>
                </CtInput>
                </CtForm>
                </Ct>
            </>
        )   
    };

export default Update
