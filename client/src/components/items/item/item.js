import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteItemAction } from "../../../stores/actions/items";
import { Icon, Image, Info, ItemContainer } from "./styles";

const Item = ({ item }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {}, [item]);

    const showItemInfo = () => {
        navigate(`/items/${item.id}`, { state: item });
    };

    return (
        <ItemContainer>
            <Image src={item.imageFileName} />
            <Info>
                <Button onClick={showItemInfo}>
                    <Icon>
                        <InfoIcon />
                    </Icon>
                </Button>
                <Button onClick={() => dispatch(deleteItemAction(item))}>
                    <Icon>
                        <DeleteIcon />
                    </Icon>
                </Button>
            </Info>
        </ItemContainer>
    );
};

export default Item;
