import { colors, fonts, radii, space } from '@jpmoreno/tokens'

export function Button() {
  return (
    <button
      style={{
        fontFamily: fonts.default,
        background: colors.ignite500,
        borderRadius: radii.md,
        padding: space[4],
      }}
    >
      Button
    </button>
  )
}
