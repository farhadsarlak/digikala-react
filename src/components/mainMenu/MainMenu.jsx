import React from 'react';
import './MainMenu.css';
import { Menu, Grid, Icon } from 'semantic-ui-react';
import MobileHeader from '../mobileHeader/MobileHeader';

const MainMenu = () => {

    return (
        <Grid padded className="mainMenuContainer" >
            <Grid.Row only="computer tablet">
                <Menu secondary size="tiny">
                    <Menu.Item>
                        <Icon name="bars" />
                        دسته بندی کالاها
                        </Menu.Item>
                    <Menu.Item>
                        <Icon name="shopping basket" />
                        سوپر مارکت
                    </Menu.Item>
                    <Menu.Item>
                        <Icon name="percent" />
                        تخفیفات و پیشنهادات
                    </Menu.Item>
                    <Menu.Item>
                        <Icon name="check circle outline" />
                        دیجی کالای من
                    </Menu.Item>
                    <Menu.Item>
                        <Icon name="bell outline" />
                        دیجی کلاب
                    </Menu.Item>

                    <Menu.Menu className="leftItem">
                        <Menu.Item>
                            ارسال به&nbsp;&nbsp;
                            <Icon name="map marker alternate" />
                        </Menu.Item>
                    </Menu.Menu>

                </Menu>
            </Grid.Row>
            <Grid.Row only="mobile" className="mobileMenu">
                <MobileHeader />
            </Grid.Row>
        </Grid >
    )
}

export default MainMenu;