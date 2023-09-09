import Modal from "react-modal";
Modal.setAppElement('#root');
import { CustomModal, ModalStyle, ContentModal, LineTable, Button } from "./style";

export default function ModalValidateFiles({ fileData, isOpen, setIsOpen }) {

    const disableButton = fileData.some((item) => item.allowed === false);

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <CustomModal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Validate files"
                style={ModalStyle}
            >
                <ContentModal>
                    <LineTable>
                        <div>Código</div>
                        <div>Nome</div>
                        <div>Preço atual</div>
                        <div>Novo preço</div>
                        <div>Permissão</div>
                        <div>Observações</div>
                    </LineTable>
                    {fileData.map((item, index) => <Product key={index} element={item} />)}

                </ContentModal>
                <Button disabled={disableButton}>ATUALIZAR</Button>
            </CustomModal>
        </div>
    );
}

function Product({ element }) {
    const allowed = element.allowed ? "Permitido" : "Negado";
    const observation = element.observation;


    return (
        <LineTable>
            <div>{element.code}</div>
            <div>{element.name}</div>
            <div>{element.priceCurrent}</div>
            <div>{element.newPrice}</div>
            <div>{element.allowed != undefined ? allowed : ""}</div>
            <div>{observation}</div>

        </LineTable>
    )
}