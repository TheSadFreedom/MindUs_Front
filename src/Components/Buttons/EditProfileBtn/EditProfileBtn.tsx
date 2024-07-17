import React, { useState } from "react";
import { Modal, Box } from "@mui/material";
import { EditProfileBtnStyled } from "./EditProfileBtn.styled";
import { EditProfileModal } from "../../Modals/EditProfileModal/EditProfileModal";

export const EditProfileBtn: React.FC = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <EditProfileBtnStyled variant="outlined" onClick={handleOpen}>
                Смена пароля
            </EditProfileBtnStyled>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '60vw',
                        height: '80vh',
                        bgcolor: 'rgba(23, 22, 27, 1)',
                        border: '2px solid #000',
                        borderRadius: '30px',
                        boxShadow: 24,
                        p: 4,
                        justifyContent: 'center',
                        alignContent: 'center',
                        textAlign: 'center',
                        rowGap: '30px'
                    }}
                >
                    <EditProfileModal handleClose={handleClose} />
                </Box>
            </Modal>
        </div>
    );
}