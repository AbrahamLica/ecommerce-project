import React from "react";
import * as C from "./AppStyles";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import close from "../../imgs/close.png";

const ModalDetail = () => {
  const { state, dispatch } = useContext(Context);

  function closeDetail() {
    dispatch({
      type: "CLOSE_MODAL_DETAILS",
      payload: {
        modalDetailOpen: false,
      },
    });
  }

  return (
    <C.ContainerModal>
      <C.Modal>
        <C.Container
          onClick={closeDetail}
          cursorPointer
          displayFlex
          justifyContent="flex-end"
          width="100%"
          margin="0px 0px 10px 0px"
        >
          <img src={close} width={35} alt="" />
        </C.Container>

        <img src={require(`../../imgs/${state.shop.src}`)} alt="" />
      </C.Modal>
    </C.ContainerModal>
  );
};

export default ModalDetail;
