import React from "react";
import "./CursoCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import CardActions from '@mui/material/CardActions';
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CursoCard(params) {
  return (
    <>
      {params.cursos.map((todo) => {
        return (
          <>
            <Card
              sx={{
                width: 260,
                backgroundColor: "#d8d8d8",
              }}
            >
              <CardHeader
                sx={{
                  height: 50,
                }}
                title={todo.title}
              />

              <CardMedia
                component="img"
                height="150"
                image={todo.imagen}
                alt="Imagen URL"
              />
              <CardContent>
                <Typography
                  variant="body2" 
                  gutterBottom
                  component="div"
                  sx={{
                    width: 230,
                    minHeight: 115,
                    fontSize: "0.875rem"
                  }}
                >
                  {todo.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton 
                  aria-label="edit" 
                  sx={{
                    color: '#027373'
                  }}
                  onClick={() => params.onEdit(todo)}
                >
                  <EditIcon/>
                </IconButton>
                <IconButton 
                  aria-label="delete" 
                  sx={{
                    color: '#027373'
                  }}
                  onClick={() => params.onDelete(todo.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          </>
        );
      })}
    </>
  );
}
