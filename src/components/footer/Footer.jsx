import React from 'react';
import { Grid, Segment, Image, Label, Input, Button, Icon, Divider } from 'semantic-ui-react';
import './Footer.css';

import { Link, NavLink } from 'react-router-dom';

const Footer = () => {

    return (
        <div className={"bgColor"} >
            <Grid columns={5} padded>
                <Grid.Row only="computer tablet">
                    <Grid.Column>
                        <Segment className={"edited-segment-footer"}>
                            <Label attached='top' color={"teal"} pointing={'below'}>تحویل اکسپرس</Label>
                            <Image src='/assets/images/footer/footer1.svg' centered verticalAlign='middle' />
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment padded className={"edited-segment-footer"}>
                            <Label color={"teal"} attached='top' pointing={'below'}>پشتیبانی 24 ساعته</Label>
                            <Image src='/assets/images/footer/footer2.svg' centered verticalAlign='middle' />
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment padded className={"edited-segment-footer"}>
                            <Label color={"teal"} attached='top' pointing={'below'}>پرداخت در محل</Label>
                            <Image src='/assets/images/footer/footer5.svg' centered verticalAlign='middle' />
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment padded className={"edited-segment-footer"}>
                            <Label color={"teal"} attached='top' pointing={'below'}>7 روز ضمانت بازگشت</Label>
                            <Image src='/assets/images/footer/footer4.svg' centered verticalAlign='middle' />
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment padded className={"edited-segment-footer"}>
                            <Label color={"teal"} attached='top' pointing={'below'}>ضمانت اصل بودن کالا</Label>
                            <Image src='/assets/images/footer/footer3.svg' centered verticalAlign='middle' />
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            <Divider horizontal />

            <div className="mainFooter">
                <div className="menu-item1">
                    <h4>راهنمای خرید از دیجی کالا</h4>
                    <ul className="ulItems">
                        <li>
                            <NavLink to="/"> نحوه ثبت سفارش</NavLink>
                        </li>
                        <li>
                            <NavLink to="/"> رویه ارسال</NavLink>
                        </li>
                        <li>
                            <NavLink to="/"> شیوه های پرداخت</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="menu-item2">
                    <h4>خدمات مشتریان</h4>
                    <ul className="ulItems">
                        <li>
                            <NavLink to="/"> پاسخ به پرسش‌های متداول</NavLink>
                        </li>
                        <li>
                            <NavLink to="/"> رویه‌های بازگرداندن کالا</NavLink>
                        </li>
                        <li>
                            <NavLink to="/"> شرایط استفاده</NavLink>
                        </li>
                        <li>
                            <NavLink to="/"> حریم خصوصی</NavLink>
                        </li>
                        <li>
                            <NavLink to="/"> گزارش باگ</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="menu-item3">
                    <h4>با دیجی کالا</h4>
                    <ul className="ulItems">
                        <li>
                            <NavLink to="/"> اتاق خبر دیجی‌کالا </NavLink>
                        </li>
                        <li>
                            <NavLink to="/"> فروش در دیجی‌کالا </NavLink>
                        </li>
                        <li>
                            <NavLink to="/"> فرصت‌های شغلی </NavLink>
                        </li>
                        <li>
                            <NavLink to="/"> تماس با دیجی‌کالا </NavLink>
                        </li>
                        <li>
                            <NavLink to="/"> درباره دیجی‌کالا </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="social-item">
                    <div className="social-item-div">
                        <div className="social-input">
                            <Input
                                label="عضویت"
                                labelPosition="right"
                                color="teal"
                                placeholder="ادرس ایمیل خود را وارد نمایید"
                                size="small"
                            />
                        </div>
                        <div className="social-icon">
                            <h3 >با ما در شبکه های اجتماعی همراه باشید</h3>
                            <div style={{ textAlign: "right" }}>
                                <Button circular color='facebook' icon='facebook' />
                                <Button circular color='twitter' icon='twitter' />
                                <Button circular color='linkedin' icon='linkedin alternate' />
                                <Button circular color='google plus' icon='google plus g' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Divider horizontal />

            <Grid textAlign='right' className={"padding-footer"} columns={2}>
                <Grid.Row>
                    <Grid.Column className={"padding-footer"} mobile={8} tablet={8} computer={8}>
                        <p>هفت روز هفته، 24 ساعت شبانه روز پاسخگوی شما هستیم <span>َشماره های تماس: 09136823564 - 09136823565</span></p>
                        <p>  ایمیل : <Link to={'/'}> farhad.sarlak64@gmail.com </Link></p>
                    </Grid.Column>
                    <Grid.Column className={"padding-footer text-footer-center"} mobile={8} tablet={8} computer={8}>
                        <Button icon color={"black"}>
                            <Icon name='cc apple pay' />
                        </Button>
                        <Button icon color={"black"} >
                            <Icon name='google play' />
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )

};
export default Footer;