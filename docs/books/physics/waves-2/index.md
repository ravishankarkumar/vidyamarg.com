---
title: Physics Book - Waves-2 for JEE & NEET
description: Learn sound waves for JEE and NEET, covering sound properties, speed, intensity, and Doppler effect, with practice MCQs.
slug: book/physics/waves-2
keywords: physics sound waves, JEE physics Doppler effect, NEET physics sound intensity, wave propagation
og:image: https://vidyamarg.com/og-physics-waves-2.jpg
---

# Chapter 17: Waves-2

**Beta Version**: Some equations may not render correctly (try Chrome/Firefox, clear cache, or refresh). Solutions, videos, and animations coming soon! Share feedback [here](#).

Sound waves, a type of longitudinal mechanical wave, propagate energy through compressions and rarefactions in a medium. This chapter explores sound wave properties, speed of sound, intensity and sound level, and the Doppler effect. These concepts are vital for JEE Main, JEE Advanced, and NEET, appearing in problems on sound frequency, decibel levels, and frequency shifts due to motion. With clear explanations, exam-focused examples, and robust problem-solving strategies, this chapter equips students to master sound wave mechanics in competitive exams, ensuring precision and conceptual clarity.

## 17.1 Sound Waves

**Sound waves** are longitudinal waves where particle displacement is parallel to the direction of propagation, creating regions of compression and rarefaction. Key properties include **frequency** ($f$, determining pitch), **wavelength** ($\lambda$), **amplitude** (affecting loudness), and **speed** ($v = f \lambda$). The audible range for humans is 20 Hz to 20 kHz. JEE/NEET problems often involve calculating frequency or wavelength of sound in air or other media. *Fundamentals of Physics* emphasizes sound as a pressure wave.

**Solved Example**: A JEE Main problem involves a sound wave with frequency 440 Hz and speed 343 m/s in air. Calculate the wavelength.
- **Solution**: Wavelength: $$\lambda = \frac{v}{f}$$. Given $v = 343 \, \text{m/s}$, $f = 440 \, \text{Hz}$: $$\lambda = \frac{343}{440} \approx 0.77955 \, \text{m} \approx 0.78 \, \text{m}$$ (2 significant figures, April 14, 2025). This is a standard JEE sound wave problem.
  - **JEE Tip**: Use SI units (m/s, Hz); divide carefully. Common error: Confusing speed with frequency or using incorrect medium.

**Solved Example**: A NEET problem involves a sound wave with period 0.002 s in air (speed 340 m/s). Calculate the frequency.
- **Solution**: Frequency: $$f = \frac{1}{T}$$. Given $T = 0.002 \, \text{s}$: $$f = \frac{1}{0.002} = 500 \, \text{Hz}$$ (3 significant figures). Alternatively, confirm wavelength: $$\lambda = v T = 340 \times 0.002 = 0.68 \, \text{m}$$, then $$f = \frac{v}{\lambda} = \frac{340}{0.68} = 500 \, \text{Hz}$$. This is a typical NEET frequency problem.
  - **NEET Tip**: Frequency is inverse of period; verify with wave speed. Common error: Incorrect period or speed.

## 17.2 Speed of Sound

The **speed of sound** in a medium depends on its properties. In gases, $$v = \sqrt{\frac{\gamma P}{\rho}}$$, where $\gamma$ is the adiabatic index, $P$ is pressure, and $\rho$ is density. For air at 20°C, $v \approx 343 \, \text{m/s}$, increasing with temperature ($v \approx 331 + 0.6 T_C$, where $T_C$ is Celsius temperature). In liquids and solids, speed is higher due to greater bulk modulus. JEE/NEET problems involve calculating speed or its variation with temperature. *University Physics* connects speed to molecular interactions.

**Solved Example**: A JEE Advanced problem involves sound in air at 30°C. Calculate the speed of sound.
- **Solution**: Speed of sound: $$v \approx 331 + 0.6 T_C$$. Given $T_C = 30 \, \text{°C}$: $$v = 331 + 0.6 \times 30 = 331 + 18 = 349 \, \text{m/s}$$ (3 significant figures, April 14, 2025). This is a classic JEE speed of sound problem.
  - **JEE Tip**: Use temperature-dependent formula; check units. Common error: Using 343 m/s or incorrect temperature.

**Solved Example**: A NEET problem involves sound in water (speed 1480 m/s) with wavelength 0.5 m. Calculate the frequency.
- **Solution**: Frequency: $$f = \frac{v}{\lambda}$$. Given $v = 1480 \, \text{m/s}$, $\lambda = 0.5 \, \text{m}$: $$f = \frac{1480}{0.5} = 2960 \, \text{Hz} \approx 3000 \, \text{Hz}$$ (2 significant figures). This is a typical NEET sound frequency problem.
  - **NEET Tip**: Use medium-specific speed; verify wavelength units. Common error: Using air’s speed or incorrect division.

## 17.3 Intensity and Sound Level

**Sound intensity** ($I$) is power per unit area, measured in W/m²: $$I = \frac{P}{A}$$. The **sound intensity level** in decibels (dB) is $$\beta = 10 \log_{10} \left( \frac{I}{I_0} \right)$$, where $I_0 = 10^{-12} \, \text{W/m}^2$ is the threshold of hearing. Doubling intensity increases $\beta$ by ~3 dB. JEE/NEET problems involve calculating intensity or decibel levels. *Fundamentals of Physics* highlights logarithmic scaling in sound perception.

**Solved Example**: A JEE Main problem involves a sound wave with intensity $10^{-6} \, \text{W/m}^2$. Calculate the sound level in decibels.
- **Solution**: Sound level: $$\beta = 10 \log_{10} \left( \frac{I}{I_0} \right)$$. Given $I = 10^{-6} \, \text{W/m}^2$, $I_0 = 10^{-12} \, \text{W/m}^2$: $$\frac{I}{I_0} = \frac{10^{-6}}{10^{-12}} = 10^6$$, $$\beta = 10 \log_{10} (10^6) = 10 \times 6 = 60 \, \text{dB}$$ (2 significant figures). This is a standard JEE decibel problem.
  - **JEE Tip**: Use logarithmic formula; $\log_{10} (10^n) = n$. Common error: Incorrect $I_0$ or log calculation.

**Solved Example**: A NEET problem involves two identical sound sources, each producing 50 dB. Calculate the combined sound level.
- **Solution**: Each source has $\beta = 50 \, \text{dB}$, so $$I = I_0 \times 10^{\beta/10} = 10^{-12} \times 10^{50/10} = 10^{-7} \, \text{W/m}^2$$. Two sources double intensity: $$I_{\text{total}} = 2 \times 10^{-7} = 2 \times 10^{-7} \, \text{W/m}^2$$. Combined level: $$\beta = 10 \log_{10} \left( \frac{2 \times 10^{-7}}{10^{-12}} \right) = 10 \log_{10} (2 \times 10^5) = 10 (\log_{10} 2 + 5) \approx 10 (0.301 + 5) \approx 53.01 \, \text{dB} \approx 53 \, \text{dB}$$ (2 significant figures). This is a typical NEET intensity problem.
  - **NEET Tip**: Doubling intensity adds ~3 dB; use log rules. Common error: Adding dB directly.

## 17.4 Doppler Effect

The **Doppler effect** describes the change in observed frequency of a wave due to relative motion between source and observer. For sound, when the source moves toward the observer, observed frequency increases; when moving away, it decreases. The general formula is $$f' = f \left( \frac{v \pm v_o}{v \mp v_s} \right)$$, where $f'$ is observed frequency, $f$ is source frequency, $v$ is sound speed, $v_o$ is observer velocity, and $v_s$ is source velocity (signs depend on direction). JEE/NEET problems involve calculating $f'$. *University Physics* connects Doppler to medical and astronomical applications.

**Solved Example**: A JEE Advanced problem involves a source (frequency 500 Hz) moving at 20 m/s toward a stationary observer (sound speed 343 m/s). Calculate the observed frequency.
- **Solution**: Doppler formula (stationary observer, source moving toward): $$f' = f \left( \frac{v}{v - v_s} \right)$$. Given $f = 500 \, \text{Hz}$, $v = 343 \, \text{m/s}$, $v_s = 20 \, \text{m/s}$, $v_o = 0$: $$f' = 500 \left( \frac{343}{343 - 20} \right) = 500 \left( \frac{343}{323} \right) \approx 500 \times 1.06192 \approx 530.96 \, \text{Hz} \approx 531 \, \text{Hz}$$ (3 significant figures). This is a classic JEE Doppler problem.
  - **JEE Tip**: Use correct signs; source toward observer increases $f'$. Common error: Incorrect denominator or signs.

**Solved Example**: A NEET problem involves an observer moving at 10 m/s toward a stationary source (frequency 400 Hz, sound speed 340 m/s). Calculate the observed frequency.
- **Solution**: Doppler formula (observer moving toward, stationary source): $$f' = f \left( \frac{v + v_o}{v} \right)$$. Given $f = 400 \, \text{Hz}$, $v = 340 \, \text{m/s}$, $v_o = 10 \, \text{m/s}$, $v_s = 0$: $$f' = 400 \left( \frac{340 + 10}{340} \right) = 400 \left( \frac{350}{340} \right) \approx 400 \times 1.02941 \approx 411.76 \, \text{Hz} \approx 412 \, \text{Hz}$$ (3 significant figures). This is a typical NEET Doppler problem.
  - **NEET Tip**: Observer toward source increases $f'$; simplify fraction. Common error: Using source motion formula.

## Review & Summary
- **Sound Waves**: Longitudinal, with frequency, wavelength, amplitude; $v = f \lambda$.
- **Speed of Sound**: In air, $v \approx 331 + 0.6 T_C$; in other media, depends on bulk modulus, density.
- **Intensity**: $I = \frac{P}{A}$; sound level $\beta = 10 \log_{10} \left( \frac{I}{I_0} \right)$, $I_0 = 10^{-12} \, \text{W/m}^2$.
- **Doppler Effect**: Frequency shift: $f' = f \left( \frac{v \pm v_o}{v \mp v_s} \right)$.

## Quick Revision Section
- **Key Equations**:
  - Wave speed: $v = f \lambda$
  - Speed in air: $v \approx 331 + 0.6 T_C$
  - Sound level: $\beta = 10 \log_{10} \left( \frac{I}{I_0} \right)$
  - Doppler effect: $f' = f \left( \frac{v \pm v_o}{v \mp v_s} \right)$
- **SI Units**: Speed (m/s), frequency (Hz), wavelength (m), intensity (W/m²), sound level (dB).
- **JEE/NEET Tips**: Use SI units, verify significant figures (April 14, 2025), apply logarithmic rules for dB, use correct Doppler signs.
- **Applications**: Music, medical ultrasound, radar, astronomy.

## Practice Problems
Explore our extensive problem set with **100 problems** inspired by JEE Main, JEE Advanced, and NEET PYQs (2020–2024) to test your understanding of sound waves, with year and paper details.

[View Problems](./problems.md)

<!-- [View Solutions](/books/physics/waves-2/solutions) -->

## Watch on YouTube
Our Hinglish video lessons make sound waves engaging for JEE and NEET! Subscribe for updates.

[Watch Now](https://www.youtube.com/@VidyaMargbyRaviShankar-w9u) <!-- Update with specific video link when available -->

*Manim animation for visualizing sound waves and Doppler effect coming soon!*

*Note: Content regularly updated to align with current JEE/NEET syllabi.*