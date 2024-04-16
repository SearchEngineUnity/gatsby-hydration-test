/**
 * To mark a component as client side, you add the "use client" directive.
 * @see {@link https://github.com/reactjs/rfcs/blob/2348bd8ed7fb66fedf04726eb046065be7f4e23f/text/0227-server-module-conventions.md}
 */
"use client"

import React from "react"
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';

export function SanityImage() {

  const imageData = getGatsbyImageData('image-e207f19423b9cfb04d870421f4069a656b5747bb-1140x530-png', {}, {
    projectId: 'ki8bqxrw',
    dataset: 'production',
  });

  return (
    <GatsbyImage image={imageData} style={{width: '100%', height: 'auto'}} alt="" />
  )
}
