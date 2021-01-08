import React, { useContext, useCallback } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core";
import { Modal, Backdrop, Fade, Button } from "@material-ui/core";
import { StoreContext } from "../../Store";
import { toggleModal } from "../../Store/actions";
import spreadProps from "../../utils/spreadProps";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default ({ children, modalButtonText, buttonstyles }) => {
  const classes = useStyles();
  const [state, dispatch] = useContext(StoreContext);
  const { modal: { isOpen } } = state;

  const handleOpen = () => {
    toggleModal(dispatch, true);
  };

  const handleClose = useCallback(() => {
    toggleModal(dispatch, false);
  }, [dispatch]);

  return (
    <>
      <OpenModalButton onClick={handleOpen} buttonstyles={buttonstyles}>
        {modalButtonText}
      </OpenModalButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={isOpen}>
          <ChildrenWrapper className={classes.paper}>
            {children}
          </ChildrenWrapper>
        </Fade>
      </Modal>
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  modalButtonText: PropTypes.string,
  buttonstyles: PropTypes.shape()
};

Modal.defaultProps = {
  buttonstyles: {},
  modalButtonText: "Open Modal"
};

const ChildrenWrapper = styled("div")``;

const OpenModalButton = styled(Button)`
  ${({ buttonstyles }) => spreadProps(buttonstyles)}
`;
