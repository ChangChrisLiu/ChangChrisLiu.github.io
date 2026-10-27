---
layout: page
title: Research
permalink: /research/
description: Learning from experience, coordinating manipulation skills, and building complete robot systems.
nav: true
nav_order: 1
---

<div class="research-overview" markdown="1">
My research asks how robots can adapt to physical variation, recover from failed attempts, and perform useful manipulation with limited task data. I use **robotic disassembly** as a testbed: products differ, actions have prerequisites, and success often depends on precise contact with small components.

This connects three parts of my work: learning better policies from experience, combining learned behavior with explicit skills, and building the data and hardware systems needed to evaluate them.

</div>

## Selected projects

{% include research_projects.liquid %}

## Tools for robot learning

I built and open-sourced a [teleoperation and data collection platform](https://github.com/ChangChrisLiu/DataCollection) based on GELLO. It connects UR5e control over ZMQ, dual-camera capture, phase-labeled recording, and dataset export for OpenVLA, OpenVLA-OFT, and openpi workflows. I also develop annotation tools and a separate dual-joystick teleoperation system.

These tools support the full experimental workflow: collect demonstrations, train policies, run them on the robot, record failures, and collect corrections.

Public dataset releases are available on my [Hugging Face profile](https://huggingface.co/{{ site.data.socials.huggingface_username }}).

## Beyond individual policies

I also collaborate on [vision and torque fusion for contact-aware manipulation](https://arxiv.org/abs/2604.01414), [generative motion planning](https://arxiv.org/abs/2608.24026), and [component segmentation for e-waste disassembly](https://arxiv.org/abs/2603.27441). Our [analysis of large language models in remanufacturing](https://arxiv.org/abs/2608.04854) examines how these capabilities can fit into a broader automation workflow.

My ongoing interests include multimodal sensing, learning from human feedback, and evaluation across different physical products. See the [publication list]({{ '/publications/' | relative_url }}) for published work and preprints.
