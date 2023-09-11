import { useRef, useState } from "react";
import Papa from 'papaparse';
import api from "../../service/api";
import { Title, Choice, BoxFileName, Principal, ButtonChoiceFile, Container, ButtonValidation } from "./style";
import ModalValidateFiles from "../modal/ModalValidateFiles";



export default function FileBox() {

    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState();
    const [fileData, setFileData] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function treatFile(e) {
        const file = e.target.files[0];
        setSelectedFile(file)
    }

    function validateFileContent(element, index) {
        if (element[0] === '') {
            return true; 
        }
        if (!index) {
            if (!element.includes("product_code") || !element.includes("new_price")) {
                alert("O arquivo não contém os dados necessários");
                return false;
            }
            return true;
        }
        if (isNaN(element[0]) || isNaN(element[1])) {
            alert("Código e preço devem ser preenchidos com valores numéricos");
            return false;
        }
        return true;
    }

    async function validateFile() {
                
        Papa.parse(selectedFile, {
            complete: async (result) => {
                const assessment = result.data.map(validateFileContent); 
                if (assessment.includes(false)) return;

                const data = result.data.slice(1);
                
                try {
                    const response = await api.postDataFile(data);
                    setFileData(response.data);
                    setModalIsOpen(true);
                    
                } catch (error) {
                    console.log(error)
                }
            },
        });


    }


    return (
        <Container>
            <Principal>
                <Title>Escolha um arquivo no formato .csv para validar</Title>
                <Choice>
                    <input
                        type="file"
                        accept=".csv"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={treatFile}
                    />


                    <ButtonChoiceFile onClick={() => fileInputRef.current.click()}>Escolher arquivo</ButtonChoiceFile>
                    <BoxFileName>{selectedFile ? selectedFile.name : ""}</BoxFileName>
                </Choice>
                <ButtonValidation onClick={validateFile}>Validar</ButtonValidation>
                <ModalValidateFiles fileData={fileData} setSelectedFile={setSelectedFile} isOpen={modalIsOpen} setIsOpen={setModalIsOpen}/>
            </Principal>
        </Container>
    )
}