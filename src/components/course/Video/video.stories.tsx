import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import VideoThumbnail from "./video";


const meta: Meta<typeof VideoThumbnail> = {
    title: "Course/Video",
    component: VideoThumbnail,
}

export default meta

type videoStories = StoryObj<typeof VideoThumbnail>;

export const Video: videoStories = {
    args:{
        backgroundImage: 'https://cdn.prod.website-files.com/5f5a53e153805db840dae2db/646f78e97936bca6f5b4933c_javascript-que-es-para-que-sirve.jpg',
    },
    name: 'video',
    render: (args) => <VideoThumbnail backgroundImage={args.backgroundImage}></VideoThumbnail>
}

