import React, { useState } from "react";
import { Modal, Box } from "@mui/material";
import { AdminModal } from "../../Modals/AdminModal/AdminModal";
import { AdminBtnStyled } from "./AdminBtn.styled";


export const AdminBtn: React.FC = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <AdminBtnStyled variant="outlined" onClick={handleOpen}>
                Панель управления
            </AdminBtnStyled>
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
                        width: 'auto',
                        height: 'auto',
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
                    <AdminModal handleClose={handleClose} />
                </Box>
            </Modal>
        </div>
    );
};
