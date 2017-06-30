# VueCroppie

VueCroppie is a [Vue](https://vuejs.org/) 2 wrapper for [Croppie](https://foliotek.github.io/Croppie/) a beautiful photo cropping tool for Javascript by [foliotek](http://www.foliotek.com/).

# Installation

### NPM

`npm install vue-croppie`

### Usage

```
import Vue from 'vue'
import VueCroppie from 'vue-croppie'

Vue.use(VueCroppie)
```

# Sample 

This sample below will produce [this](https://jofftiquez.github.io/vue-croppie/)

```
<template>
    <div>
        <!-- Note that 'ref' is important here (value can be anything). read the description about `ref` below. -->
        <vue-croppie 
            ref=croppieRef 
            resultType="base64"
            :enableOrientation="true">
        </vue-croppie>

        <!-- the result -->
        <img v-bind:src="cropped">


    </div>
</template>

<script>
export default {
    mounted() {
        // Upon mounting of the component, we accessed the bind({...}) method,
        // to put an initial image to the canvas.
        this.$refs.croppieRef.bind({
            url: 'http://i.imgur.com/Fq2DMeH.jpg',
        })
    },
    data() {
        cropped: null,
        images: [
            'http://i.imgur.com/fHNtPXX.jpg',
            'http://i.imgur.com/ecMUngU.jpg',
            'http://i.imgur.com/7oO6zrh.jpg',
            'http://i.imgur.com/miVkBH2.jpg'
        ]
    },
    methods() {
        bind() {
            // Randomize cat photos, nothing special here.
            let url = this.images[Math.floor(Math.random() * 4)]

            // Like the one the mounted() function above.
            this.$refs.croppieRef.bind({
                url: url,
            })
        },
        crop() {

            // Here we are getting the result via callback function
            // and set the result to this.cropped which is being 
            // used to display the result above.
            this.$refs.croppieRef.result((output) => {
                this.cropped = output;
            });
        },
        rotate(rotationAngle) {
            // Rotates the image
            this.$refs.croppieRef.rotate(rotationAngle);
        }
    }
}
</script>
```

# API

All of the options and methods are based on [Croppie Documentation](https://foliotek.github.io/Croppie/). All property names and method names are `"==="` the same if you know what I mean.

Except for thest few things below.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `ref` (required) | `Object` | `none` | `ref` is used to create a reference to the child component, in order to have access to it's methods and properties. Specific example is to access the `result()` function of `vue-croppie` from outside the component. | 
| `resultType` | `String` | `base64` | The image encoding of the cropped image via `result()`. Also available in [Croppie Documentation](https://foliotek.github.io/Croppie/). |