

type IProjectData = {
    id: string
    title: string
    videoUrl: string
    description: string
}

export default function Projects() {
    const content: IProjectData[] = [
        {
            id: "001",
            title: "SinDesigner",
            description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            videoUrl: "/videos/test.mp4"
        },
        {
            id: "002",
            title: "SinDesigner",
            description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            videoUrl: "/videos/test.mp4"
        }
    ]

    return <div className="bg-black p-3">
        {
            content.map(data => <div
                className="bg-[#202020] shadow-md shadow-slate-600 my-10 grid md:grid-cols-2 gap-6 rounded-3xl text-white"
                key={data.id}>
                <div className="content-center md:text-right text-center">
                    <p className="md:text-4xl text-2xl m-4" >{data.title}</p>
                    <p className="md:text-xl " >{data.description}</p>
                </div>
                <video
                    className="md:rounded-e-3xl rounded-b-3xl"
                    src={data.videoUrl}
                    autoPlay
                    playsInline
                    preload="metadata"
                    muted
                    loop
                >
                </video>
            </div>)
        }
    </div>
}
