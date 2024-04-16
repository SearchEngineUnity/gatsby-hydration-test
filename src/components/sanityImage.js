/**
 * To mark a component as client side, you add the "use client" directive.
 * @see {@link https://github.com/reactjs/rfcs/blob/2348bd8ed7fb66fedf04726eb046065be7f4e23f/text/0227-server-module-conventions.md}
 */
"use client"

import React from "react"
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';

export function SanityImage() {

  const imageData = getGatsbyImageData('image-c8efe65b97983de53a194cc844cc71b4b2900704-1180x1080-png', {}, {
    projectId: 'ki8bqxrw',
    dataset: 'production',
  });

  return (
    <GatsbyImage image={imageData} style={{width: '100%', height: 'auto'}} alt="" />
  )
}
