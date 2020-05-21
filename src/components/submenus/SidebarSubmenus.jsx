import React, { useContext } from "react";
import { Grid, Icon, Segment, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { filterSubmenusContext } from "../context/submenuPageContext/filterSubmenusContext";


const SidebarSubmenus = () => {

    const filterSubmenuContext = useContext(filterSubmenusContext);
    const {
        setSearchFieldBrands,
        setSearchFieldProducts,
        showCollection,
        setShowCollection,
        getRenderedCollection,
        toggleCollection,
        mainSubmenu,
        mainCategory,
        mainCollection
    } = filterSubmenuContext

    return (
        <Grid padded>
            <Grid.Row>
                <Grid.Column>
                    <Segment raised color="red">
                        <h3>فیلترهای اعمال شده</h3>
                        <Label>{mainSubmenu[0]?.title}</Label>
                        <Label>{mainCollection[0]?.title}</Label>
                        {[1, 2, 3].map(item =>
                            <Label key={item}>
                                <Icon name="delete" />
                            </Label>
                        )}
                    </Segment>
                    <Segment raised color="teal">
                        <h3>دسته بندی نتایج</h3>
                        <div>
                            <Link to={`category/${mainCategory[0]?.id}`}>
                                <Icon size="small" name="chevron right" />
                            </Link>
                        </div>
                        <div className={"submenuTitle-sideBarMenu"}>
                            <Link to={`/submenu/${mainSubmenu[0]?.id}`}>
                                <Icon name={"chevron left"} size={"small"} />
                                {mainSubmenu[0]?.title}
                            </Link>
                        </div>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default SidebarSubmenus;