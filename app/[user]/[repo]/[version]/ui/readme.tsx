import { remark } from 'remark';
import html from 'remark-html';

export default async function Readme({ readme }: Readonly<{
    readme: string,
}>) {
    const processedReadme = await remark()
        .use(html)
        .process(readme);
    const contentHtml = processedReadme.toString();

    return (
        <div className='py-10 px-3'>
            <div
                className='container mx-auto prose'
                dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
        </div>
    )
}
