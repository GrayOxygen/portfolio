---
title: "Midi Note Generator"
description:
  'Generative midi notes.'
icon: "code"
pubDate: "29 Sep 2024"
heroImage: "/src/assets/installation.jpg"
---

## Midi Note Generator
+ Max/MSP (with Javascript)
I use a **quicksort algorithm** to organize an array of pitches. Rather than only outputting the final sorted sequence, I convert **each intermediate state of sorting the array into MIDI notes** (different tracks/instruments). As the algorithm progresses, the listener hears the pitches gradually approaching an ordered state, creating a dynamic musical process in which the evolution of order itself is experienced sonically. The process of generating in this way can continue indefinitely, and during this process, many parameter changes are supported, resulting in subtle variations in the process of generating musical notes.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe 
    src="https://drive.google.com/file/d/1sMtrxgKP5QhzUppbBmUg_wmOeMrTkiaH/preview"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    frameborder="0"
    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    title="">
  </iframe>
</div>