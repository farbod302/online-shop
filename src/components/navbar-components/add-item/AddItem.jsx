import React, { useEffect, useState } from 'react';
import { server_request } from '../../../helper';

import "./add-item.scss"


const AddItem = () => {

    const [categorys, setCategorys] = useState([])
    const [secenderyCategory, setSecenderyCategory] = useState([])

    const fetch_categorys = async () => {
        let category_list = await server_request("admin/items/category_list", "get")
        setCategorys(category_list.data.category)
    }


    useEffect(() => {
        fetch_categorys()
    }, [])

    return (
        <div className="admin-panel-container add-item">
            <div className="panel-title">
                افزودن کالا
            </div>
            <div className="content">
                <div className="group">
                    <div className="label">
                        مشخصات کالا
                    </div>
                    <div className="inputs">
                        <div className="input">
                            <input type="text" placeholder="نام " id="name" />
                        </div>
                        <div className="input">
                            <input type="number" placeholder="قیمت " id="price" />
                        </div>
                        <div className="input">
                            <input type="number" placeholder="درصد تخفیف" id="off" />
                        </div>
                        <div className="input-radio">
                            <div className="inp-label">کالا در انبار موجود است ؟</div>
                            <div>
                                <input type="radio" name="depo" defaultChecked />بله
                                <input type="radio" name="depo" />خیر
                            </div>
                        </div>
                    </div>
                </div>
                <div className="group">
                    <div className="label">
                        دسته بندی کالا
                    </div>
                    <div className="inputs">
                        <div className="input-select">
                            <select name="" id="" onChange={(e)=>{setSecenderyCategory(categorys[e.target.value - 1]?.secendery ||[])}}>
                                <option value="">انتخاب دسته بندی اصلی ...</option>
                                {categorys.map(c =>
                                    <option key={c.id} value={c.id}>{c.label}</option>
                                )}
                            </select>
                        </div>

                        <div className="input-select">
                            <select name="" id="">
                                <option value="">انتخاب دسته بندی فرعی ...</option>
                                {secenderyCategory.map(s=>
                                    <option key={s.id} value={s.id}>{s.label}</option>
                                    )}
                            </select>
                        </div>
                    </div>

                </div>

                <div className="group">
                    <div className="label">
                        نشان ها
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddItem;