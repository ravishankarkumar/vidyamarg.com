---
title: Physics Book - Electromagnetic Oscillations and Alternating Current for JEE & NEET
description: Learn AC circuits and oscillations for JEE and NEET, covering sinusoidal currents, phasors, impedance, resonance, and LC circuits, with practice MCQs.
slug: book/physics/electromagnetic-oscillations-ac
keywords: physics AC circuits, JEE physics phasors, NEET physics resonance, electromagnetism
og:image: https://vidyamarg.com/og-physics-electromagnetic-oscillations-ac.jpg
---

# Chapter 31: Electromagnetic Oscillations and Alternating Current

Alternating current (AC) circuits and electromagnetic oscillations power modern electronics, from household appliances to communication systems. This chapter explores sinusoidal currents and voltages, phasors and impedance in AC circuits, power and resonance in AC circuits, and LC and RLC oscillations. These concepts are critical for JEE Main, JEE Advanced, and NEET, appearing in problems on circuit analysis, power calculations, and oscillatory behavior. With clear explanations, exam-focused examples, and robust problem-solving strategies, this chapter equips students to master AC circuits and oscillations in competitive exams, ensuring precision and conceptual clarity.

## 31.1 Sinusoidal Currents and Voltages

**Alternating current** (AC) varies sinusoidally, described by \( I = I_0 \sin(\omega t) \), where \( I_0 \) is the peak current and \( \omega \) is the angular frequency. The **root-mean-square (RMS)** value is \( I_{\text{rms}} = \frac{I_0}{\sqrt{2}} \), and similarly for voltage (\( V_{\text{rms}} = \frac{V_0}{\sqrt{2}} \)). JEE/NEET problems involve calculating RMS values or peak quantities. *Fundamentals of Physics* emphasizes RMS for power calculations.

**Solved Example**: A JEE Main problem involves an AC circuit with a peak voltage of 200 V. Calculate the RMS voltage.
- **Solution**: RMS voltage: \( V_{\text{rms}} = \frac{V_0}{\sqrt{2}} \). Given \( V_0 = 200 \, \text{V} \): \( V_{\text{rms}} = \frac{200}{\sqrt{2}} \approx \frac{200}{1.414} \approx 141.4 \, \text{V} \approx 141 \, \text{V} \) (3 significant figures, April 14, 2025). This is a standard JEE RMS problem.
  - **JEE Tip**: Use \( \sqrt{2} \approx 1.414 \); round to significant figures. Common error: Forgetting division by \( \sqrt{2} \).

**Solved Example**: A NEET problem asks the RMS current for a peak current of 10 A.
- **Solution**: RMS current: \( I_{\text{rms}} = \frac{I_0}{\sqrt{2}} \). Given \( I_0 = 10 \, \text{A} \): \( I_{\text{rms}} \approx \frac{10}{1.414} \approx 7.07 \, \text{A} \). Option (a) “7.07 A” is correct. This is a typical NEET RMS problem.
  - **NEET Tip**: Divide by \( \sqrt{2} \); check units. Common error: Using peak value directly.

## 31.2 Phasors and Impedance in AC Circuits

**Phasors** represent sinusoidal quantities as rotating vectors, simplifying AC circuit analysis. **Impedance** (\( Z \)) combines resistance and reactance: \( Z = R + j(X_L - X_C) \), where \( X_L = \omega L \) (inductive reactance) and \( X_C = \frac{1}{\omega C} \) (capacitive reactance). Magnitude: \( |Z| = \sqrt{R^2 + (X_L - X_C)^2} \). JEE/NEET problems involve calculating impedance or phasor angles. *University Physics* highlights phasors for phase relationships.

**Solved Example**: A JEE Advanced problem involves an RLC series circuit (\( R = 100 \, \Omega \), \( L = 0.1 \, \text{H} \), \( C = 10 \, \mu\text{F} \), frequency 50 Hz). Calculate the impedance.
- **Solution**: Angular frequency: \( \omega = 2\pi f = 2\pi \times 50 \approx 314.16 \, \text{rad/s} \). Inductive reactance: \( X_L = \omega L = 314.16 \times 0.1 \approx 31.416 \, \Omega \). Capacitive reactance: \( X_C = \frac{1}{\omega C} = \frac{1}{314.16 \times 10 \times 10^{-6}} \approx \frac{1}{0.0031416} \approx 318.31 \, \Omega \). Impedance: \( Z = \sqrt{R^2 + (X_L - X_C)^2} = \sqrt{100^2 + (31.416 - 318.31)^2} \approx \sqrt{10000 + (-286.894)^2} \approx \sqrt{10000 + 82308} \approx \sqrt{92308} \approx 303.8 \, \Omega \approx 304 \, \Omega \). This is a classic JEE impedance problem.
  - **JEE Tip**: Compute reactances; square differences. Common error: Incorrect \( X_C \) units.

**Solved Example**: A NEET problem asks the phase relationship in a purely inductive AC circuit.
- **Solution**: In a purely inductive circuit, current **lags voltage by 90°** due to \( X_L = \omega L \). Option (a) “Current lags by 90°” is correct. This is a typical NEET phasor problem.
  - **NEET Tip**: Recall phase shifts: inductive lags, capacitive leads. Common error: Reversing phase.

## 31.3 Power and Resonance in AC Circuits

**Average power** in AC circuits is \( P_{\text{avg}} = I_{\text{rms}} V_{\text{rms}} \cos\phi \), where \( \cos\phi \) is the power factor. **Resonance** occurs in RLC circuits when \( X_L = X_C \), at frequency \( \omega_0 = \frac{1}{\sqrt{LC}} \), minimizing impedance. JEE/NEET problems involve calculating power or resonant frequency. *Fundamentals of Physics* connects resonance to tuned circuits.

**Solved Example**: A JEE Main problem involves an RLC series circuit (\( R = 50 \, \Omega \), \( L = 0.2 \, \text{H} \), \( C = 20 \, \mu\text{F} \)) at resonance with \( V_{\text{rms}} = 100 \, \text{V} \). Calculate the average power.
- **Solution**: At resonance, \( X_L = X_C \), so \( Z = R = 50 \, \Omega \). Current: \( I_{\text{rms}} = \frac{V_{\text{rms}}}{R} = \frac{100}{50} = 2 \, \text{A} \). Power factor: \( \cos\phi = 1 \). Power: \( P_{\text{avg}} = I_{\text{rms}} V_{\text{rms}} \cos\phi = 2 \times 100 \times 1 = 200 \, \text{W} \). This is a standard JEE power problem.
  - **JEE Tip**: At resonance, use \( Z = R \); power factor is 1. Common error: Including reactance.

**Solved Example**: A NEET problem asks the condition for resonance in an RLC circuit.
- **Solution**: Resonance occurs when \( X_L = X_C \), i.e., **inductive and capacitive reactances are equal**. Option (a) “\( X_L = X_C \)” is correct. This is a typical NEET resonance problem.
  - **NEET Tip**: Resonance balances reactances; impedance is minimum. Common error: Assuming \( R = 0 \).

## 31.4 LC and RLC Oscillations

**LC circuits** exhibit oscillations at \( \omega_0 = \frac{1}{\sqrt{LC}} \), with charge \( Q = Q_0 \cos(\omega_0 t + \phi) \). **RLC circuits** include damping, with frequency \( \omega' = \sqrt{\omega_0^2 - \left(\frac{R}{2L}\right)^2} \). JEE/NEET problems involve calculating oscillation frequencies or damping effects. *University Physics* connects LC oscillations to radio tuners.

**Solved Example**: A JEE Advanced problem involves an LC circuit (\( L = 0.5 \, \text{H} \), \( C = 100 \, \mu\text{F} \)). Calculate the oscillation frequency.
- **Solution**: Angular frequency: \( \omega_0 = \frac{1}{\sqrt{LC}} \). Given \( L = 0.5 \, \text{H} \), \( C = 100 \times 10^{-6} \, \text{F} \): \( LC = 0.5 \times 10^{-4} = 5 \times 10^{-5} \), \( \sqrt{LC} \approx 7.071 \times 10^{-3} \). \( \omega_0 = \frac{1}{7.071 \times 10^{-3}} \approx 141.4 \, \text{rad/s} \). Frequency: \( f_0 = \frac{\omega_0}{2\pi} \approx \frac{141.4}{6.283} \approx 22.51 \, \text{Hz} \approx 22.5 \, \text{Hz} \). This is a classic JEE LC problem.
  - **JEE Tip**: Convert capacitance to farads; compute \( \sqrt{LC} \). Common error: Incorrect units.

**Solved Example**: A NEET problem asks the nature of LC circuit oscillations.
- **Solution**: LC circuits exhibit **undamped oscillations** due to no resistance, oscillating at \( \omega_0 = \frac{1}{\sqrt{LC}} \). Option (a) “Undamped” is correct. This is a typical NEET oscillation problem.
  - **NEET Tip**: LC oscillations are ideal; RLC includes damping. Common error: Assuming damping.

## Review & Summary
- **Sinusoidal AC**: \( I_{\text{rms}} = \frac{I_0}{\sqrt{2}} \); \( V_{\text{rms}} = \frac{V_0}{\sqrt{2}} \).
- **Phasors/Impedance**: \( Z = \sqrt{R^2 + (X_L - X_C)^2} \); \( X_L = \omega L \), \( X_C = \frac{1}{\omega C} \).
- **Power/Resonance**: Power: \( P_{\text{avg}} = I_{\text{rms}} V_{\text{rms}} \cos\phi \); Resonance: \( \omega_0 = \frac{1}{\sqrt{LC}} \).
- **Oscillations**: LC: \( \omega_0 = \frac{1}{\sqrt{LC}} \); RLC: \( \omega' = \sqrt{\omega_0^2 - \left(\frac{R}{2L}\right)^2} \).

## Quick Revision Section
- **Key Equations**:
  - RMS: \( I_{\text{rms}} = \frac{I_0}{\sqrt{2}} \)
  - Impedance: \( |Z| = \sqrt{R^2 + (\omega L - \frac{1}{\omega C})^2} \)
  - Power: \( P_{\text{avg}} = I_{\text{rms}} V_{\text{rms}} \cos\phi \)
  - Resonance: \( \omega_0 = \frac{1}{\sqrt{LC}} \)
  - LC frequency: \( f_0 = \frac{1}{2\pi \sqrt{LC}} \)
- **SI Units**: Current (A), voltage (V), impedance (\( \Omega \)), frequency (Hz), power (W).
- **JEE/NEET Tips**: Use phasors for phase, verify significant figures (April 14, 2025), sketch RLC circuits, check resonance conditions.
- **Applications**: Power grids, radio tuners, oscillators.

## Practice Problems
Explore our extensive problem set with **100 problems** inspired by JEE Main, JEE Advanced, and NEET PYQs (2020–2024) to test your understanding of AC circuits and oscillations, with year and paper details.

[View Problems](./problems.md)

<!-- [View Solutions](/books/physics/electromagnetic-oscillations-ac/solutions) -->

## Watch on YouTube
Our Hinglish video lessons make AC circuits and oscillations engaging for JEE and NEET! Subscribe for updates.

[Watch Now](https://www.youtube.com/@VidyaMargbyRaviShankar-w9u) <!-- Update with specific video link when available -->

*Manim animation for visualizing phasors and LC oscillations coming soon!*

*Note: Content regularly updated to align with current JEE/NEET syllabi.*