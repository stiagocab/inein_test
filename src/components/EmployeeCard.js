import React from "react";
import {
  Avatar,
  Stack,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Divider,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

export default function EmployeeCard() {
  return (
    <Card sx={{ boxShadow: 3 }}>
      <CardContent>
        <Stack alignItems="center">
          <Avatar
            alt="Cindy Baker"
            sx={{ width: 100, height: 100 }}
            src="https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-cyber-man-icon-isolated-on-abstract-background-png-image_1779361.jpg"
          />

          <Typography
            variant="subtitle2"
            sx={{ fontSize: 18, mt: 2 }}
            color="text.secondary"
            gutterBottom
          >
            Santiago Cabrera Carrillo
          </Typography>
        </Stack>
        <Divider />
        <Stack mt={3}>
          {/* PHONE */}
          <Stack flexDirection="row" alignItems="center">
            <LocalPhoneIcon color="primary" sx={{ fontSize: 20 }} />
            <Typography ml={1}>5541053496</Typography>
          </Stack>

          {/* NSS */}
          <Stack flexDirection="row" alignItems="center">
            <Typography
              sx={{
                color: "primary.main",
                fontSize: 13,
                fontWeight: "bold",
                mt: 1,
              }}
            >
              NSS
            </Typography>
            <Typography ml={1} mt={1}>
              5541053496
            </Typography>
          </Stack>

          {/* RFC */}

          <Stack flexDirection="row" alignItems="center">
            <Typography
              sx={{
                color: "primary.main",
                fontSize: 13,
                fontWeight: "bold",
                mt: 1,
              }}
            >
              RFC
            </Typography>
            <Typography ml={1} mt={1}>
              5541053496
            </Typography>
          </Stack>

          {/*  */}
        </Stack>
      </CardContent>
      <Divider />
      <CardActions>
        <Button aria-label="edit" color="primary" startIcon={<ModeEditIcon />}>
          Editar
        </Button>

        <Button aria-label="delete" color="error" startIcon={<DeleteIcon />}>
          Eliminar
        </Button>
      </CardActions>
    </Card>
  );
}
