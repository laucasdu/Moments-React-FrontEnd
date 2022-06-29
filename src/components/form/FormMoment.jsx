import React, { useState } from 'react'
import { momentServices } from '../../services/momentServices'
import {
  CtForm,
  Input,
  CtInput,
  BtEdit,
  Ct,
  BtCancel,
  InputDescription,

} from "./FormMoment.styled";

function FormMoment() {

    const [newMoment, setNewMoment] = useState({});


    const onInputChange = (e) => {
      setNewMoment({ ...newMoment, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      createMoment(newMoment);
    };

    const createMoment = (data) => {
      momentServices.createMoment(data).then((res) => {
        window.location.href = "/";
        console.log(res)
      });
    }

    

  return (

        <>
            <Ct>
            <CtForm onSubmit={handleSubmit}>
                  <Input
                   name="title"
                   type="text"
                   placeholder="Title..."
                   onChange={onInputChange}
                   value={newMoment.title}
                  ></Input>
                  <Input
                    name="imgUrl"
                    type="url"
                    placeholder="Paste Img url here..."
                    onChange={onInputChange}
                    value={newMoment.imgUrl}
                  ></Input>
                  <InputDescription
                    name="description"
                    placeholder="Text description..."
                    onChange={onInputChange}
                    value={newMoment.description}
                  ></InputDescription>
                    <BtEdit type="submit" className="BtEdit">
                      <i className="fa-solid fa-pen-to-square fa-2xl"></i>
                    </BtEdit>
                    <BtCancel type="submit" className="BtCancel">
                      <i className="fa-solid fa-circle-plus fa-2xl"></i>
                    </BtCancel>
                </CtForm>
                </Ct>
            </>
          )
    };
  

export default FormMoment
