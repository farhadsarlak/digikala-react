import React from 'react';
import './CategoriesSidebar.css';
import { Segment, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const CategoriesSidebar = ({ collections, submenu, category }) => (
    <Segment raised color="teal">
        <h3 style={{ marginBottom: "20px" }}> دسته بندی کالاها </h3>
        {
            submenu.filter((submenu, index) => index < 5)
                .map((item, i) =>
                    <div key={i} className={"sidebar-main-div"}>
                        {/* <div className={"submenu-link"}><Link to={`/submenu/${item.id}`} key={item.id}> {item.title} </Link></div> */}
                        <Divider horizontal className={"submenu-link"}>
                            <Link to={`/submenu/${item.id}`} key={item.id}> {item.title} </Link>
                        </Divider>
                        {
                            collections.filter(collection => collection.submenu === item.id)
                                .map((collection, i) =>
                                    <div key={i} className={"collections-link"}>
                                        <Link to={`/collections/${collection.id}`}>{collection.title}</Link>
                                    </div>
                                )
                        }
                    </div>
                )}
    </Segment>
)
export default CategoriesSidebar;