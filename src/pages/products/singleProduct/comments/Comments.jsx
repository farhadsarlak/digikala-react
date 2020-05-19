import React from 'react';
import './Comments.css';
import {Grid,Segment,Progress,Button,Icon} from "semantic-ui-react";
import CommentDetails from './CommentDetails';

const Comments=({product})=>(
    <div>
        <h2 className={"Review-Title"}> امتیاز کاربران به</h2>
        <p className={"Review-ProductTitle"}>{product.title} </p>
        <Grid>
            <Grid.Row>
                <Grid.Column className={"margin-Comments-Grid"} computer={8} tablet={8} mobile={16}>
                    <Segment>
                        <Progress percent={60} attached='bottom' color={"teal"} />
                        سرعت
                    </Segment>
                    <Segment>
                        <Progress percent={50} attached='bottom' color={"teal"} />
                        امکان اورکلاک
                    </Segment>
                    <Segment>
                        <Progress percent={65} attached='bottom' color={"teal"} />
                        سیستم خنک کننده
                    </Segment>
                    <Segment>
                        <Progress percent={70} attached='bottom' color={"teal"} />
                        سیستم خنک کننده
                    </Segment>
                    <Segment>
                        <Progress percent={65} attached='bottom' color={"teal"} />
                        سیستم خنک کننده
                    </Segment>
                </Grid.Column>
                <Grid.Column className={"margin-Comments-Grid"} computer={8} tablet={8} mobile={16}>
                    <h3 className={"Comment-sign-in-title"}> شما هم میتوانید درمورد این کالا نظر بدهید</h3>
                    <p className={"Comment-p-sign-in"}> برای ثبت نظر، لازم است ابتدا وارد حساب کاربری خود شوید. اگر این محصول را قبلا از دیجی‌کالا خریده باشید، نظر شما به عنوان مالک محصول ثبت خواهد شد. </p>
                    <div className={"Comments-div-button"}>
                        <Button basic color={"teal"} size={"large"} icon labelPosition='right'>
                            <Icon name='comment alternate' />
                            افزودن نظر جدید
                        </Button>
                    </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <Segment raised color={"teal"}>
            <Grid>
                <Grid.Column width={4} floated={"right"}>
                    <h3> نظرات کاربران</h3>
                </Grid.Column>
                <Grid.Column computer={8} tablet={10} mobile={12} floated={"left"}>
                    <Grid columns='4'>
                        <Grid.Column>
                            <h4 className={"Comments-sortBy"}>مرتب سازی براساس:</h4>
                        </Grid.Column>
                        <Grid.Column>
                            <h5 className={"Comments-sortItems"}>نظر خریداران</h5>
                        </Grid.Column>
                        <Grid.Column>
                            <h5 className={"Comments-sortItems"}>مفیدترین نظرات</h5>
                        </Grid.Column>
                        <Grid.Column>
                            <h5 className={"Comments-sortItems"}>جدیدترین نظرات</h5>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
            <CommentDetails/>
        </Segment>
    </div>
);

export default Comments;