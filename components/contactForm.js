import {useForm} from "react-hook-form";
import {useState} from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

import "@uiw/react-markdown-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

const MarkdownEditor = dynamic(
    () => import("@uiw/react-markdown-editor").then((mod) => mod.default),
    { ssr: false }
);

export default function ContactForm({session}) {


    const {register, handleSubmit, errors, reset } = useForm();

    const [state, updateState] = useState('idle')
    const [content, setContent] = useState("");

    const onSubmit = (data) => {
        if (!content) {
            return;
        }

        const newData = {
            ...data,
            authorId: session?.user?.uid,
            content,
            createDateTime:  Date.now()
        }

        updateState('submitting')

        createPost(newData).then(async r => {

            console.log("allDataIs: " + JSON.stringify(await r.json()))

            if (r.ok && r) {
                updateState('success')
            } else {
                updateState('error')

            }
        }).catch(reason => {
            updateState('error')
        })
    }


    if (state === 'success') {
        return (
            <div>
                <p>
                    تم اضافة المقال بنجاح
                </p>

                <button
                    style={{padding: 10}}
                    onClick={event => {
                        event.preventDefault();

                        reset();
                        updateState('idle')
                    }}>اضف مقال اخر</button>



                <Link href={"/blog"} passHref legacyBehavior >
                    <button style={{padding: 10}}>المدونه</button>
                </Link>

            </div>

        );
    }

    if (state === 'error') {
        return (
            <div>
                <p>
                    حدث خطأ حاول مجددا
                </p>

                <button
                    style={{padding: 10}}
                    onClick={event => {
                    event.preventDefault();
                    updateState('idle')
                }}>رجوع</button>
            </div>

        );
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <label htmlFor="title">العنوان</label>
            <input
                {...register("title", {
                    required: "هذ الحقل مطلوب"
                } )}
                id="title"
                type="text"
                minLength="10"
                maxLength="100"
            />
            <label htmlFor="description">الوصف</label>
            <input
                {...register("description", {
                    required: "هذ الحقل مطلوب"
                } )}
                id="description"
                type="text"
                minLength="10"
                maxLength="500"
            />

            <label htmlFor="imageUrl">رابط الصورة الريسية مقاس 400X300</label>
            <input
                {...register("imageUrl", {
                    required: "هذ الحقل مطلوب"
                } )}
                id="imageUrl"
                type="url"
            />
            <label htmlFor="content">محتوي المقال</label>

            {/*<textarea*/}
            {/*    {...register("content", {*/}
            {/*        required: true*/}
            {/*    } )}*/}
            {/*    style={{width: "100%", fontSize: 25}}*/}
            {/*    id="content"*/}
            {/*    minLength="50"*/}
            {/*    rows={10}*/}
            {/*/>*/}

            <div dir={"ltr"} lang={"en"}>
                <MarkdownEditor
                    height={200}
                    // minLength="50"
                    id="content"
                    preview="edit"
                    value={content}
                    onChange={(value) => setContent(value)}
                />
            </div>



            <button
                style={{padding: 20, margin: "20px 0", }}
                type="submit"
                disabled={state === 'submitting'}
            >
                {state === 'submitting' ?  "جاري الارسال ...": "ارسال"}
            </button>
        </form>
    );
}