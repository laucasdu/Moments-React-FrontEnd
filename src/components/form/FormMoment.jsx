import React, { useEffect, useState } from 'react'
import { useNavigate, useParams} from 'react-router-dom';
import { momentServices } from '../../services/momentServices'
import {
  Form,
  Input,
  BtEdit,
  CtForm,
  BtCancel,
  InputDescription,
  CtButton,
  CtTxt,
  CtTitlePrincipal,
  TxtPrincipal

} from "./FormMoment.styled";

function FormMoment() {

  const {id} = useParams();
  const [newMoment, setNewMoment] = useState({});
  const [moments, setMoments] = useState([]);
  // const [editActive, setEditActive] = useState(id);

  let navigate = useNavigate();


  useEffect(() => {
    if (id){
      getMomentById(id) 
    }else{
      resetInputsForm()
    }
  }, [id]);



  // useEffect(() => {
  //   id?
  //     getMomentById(id) : setNewMoment({ title: "", description: "", imgUrl: "" });
  // }, [id]);


 // Funció per cridar la id del moment
 const getMomentById = (id) => {
  momentServices.getMomentById(id).then((res) => {
    if (res) {
    setNewMoment(res);
    }
  });
};

//
const onInputChange = (e) => {
      setNewMoment({ ...newMoment, [e.target.name]: e.target.value });
    };


const handleSubmitCreateUpdate = (e) => {
      e.preventDefault();

      !id? 
      createMoment(newMoment)
      :updateMoment(newMoment);


      // navigate('/', {replace: true});
      resetInputsForm();
  };


const handleReset = () => {
    navigate('/', {replace: true});
  }


// Funció per crear un moment
const createMoment = (data) => {
    momentServices.createMoment(data).then((res) => {
      setMoments([...moments, res]);
      // if(res);
    });
    resetInputsForm();
    navigate('/', {replace: true});

  }

// Funció per modificar un moment
const updateMoment = (newMoment) => {
  momentServices.updateMoment(newMoment.id, newMoment).then((res) => {
    let momentToUpdate = moments.map((moment) => moment.id === newMoment.id ? newMoment : moment) 
    setMoments(momentToUpdate)
  })
  resetInputsForm();
  navigate('/', {replace: true}); 
  };


//Funció que serveix per buidar el formulari
const resetInputsForm = () => {
  setNewMoment({id:'', title:'', imgUrl:'',description:''})   
};



  return (

        <>
            <CtForm>
            <Form onSubmit={handleSubmitCreateUpdate}>
              <CtTitlePrincipal> 
            <TxtPrincipal>FORM</TxtPrincipal>
            </CtTitlePrincipal>
              <CtTxt>Title</CtTxt>
                  <Input
                    onChange={onInputChange}
                    value={newMoment.title}
                    name="title"
                    type="text"
                    placeholder="Title..."
                  ></Input>
                <CtTxt>Imatge</CtTxt>
                  <Input
                    onChange={onInputChange}
                    value={newMoment.imgUrl}
                    name="imgUrl"
                    type="url"
                    placeholder="Paste Img url here..."
                  ></Input>
                <CtTxt>Description</CtTxt>
                  <InputDescription
                    onChange={onInputChange}
                    value={newMoment.description}
                    name="description"
                    placeholder="Text description..."
                  ></InputDescription>
                  <CtButton>
                    {id   //Condició per fer que canvi de botó segons el que volem fer
                    ? <BtEdit type="submit">EDIT</BtEdit>
                    : <BtEdit type="submit">CREATE</BtEdit>
                    } 
                    <BtCancel type="reset" onClick={handleReset}>CANCEL</BtCancel>
                    {/* <BtCancel type="reset" onClick={resetInputsForm}>CANCEL</BtCancel> */}

                    </CtButton>
                </Form>
                </CtForm>
            </>
          );
    }

  

export default FormMoment
