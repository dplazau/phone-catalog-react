import {
    AppBar,
    Container,
    Toolbar,
    Typography,
    Box,
    Button,
    IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";

const ResponsiveAppBar = () => {
    return (
        <Box>
            <AppBar position="sticky" color="inherit">
                <Toolbar
                    sx={{
                        flex: 1,
                    }}
                >
                    <Container sx={{ flex: 2 }}>
                        <Link to="/">
                            <Button>
                                <Typography
                                    variant="h4"
                                    component="div"
                                    align="center"
                                >
                                    Phone Catalog
                                </Typography>
                            </Button>
                        </Link>
                    </Container>
                    <Container
                        sx={{
                            flex: 6,
                            justifyContent: "space-between",
                        }}
                    >
                        <Link to="/add-item">
                            <Button>Add Item</Button>
                        </Link>
                    </Container>
                    <Container sx={{ flex: 1 }}>
                        <IconButton></IconButton>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default ResponsiveAppBar;
