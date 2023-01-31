export function BinaryCalculatorTemplate() {
    document.querySelector('#binaryCalc').innerHTML = `
    <div class="card">
      <div class="card-header">
        <h5 class="card-title">Kalkulator binarny (8 bitów)</h5>
        <h6 class="card-subtitle text-muted">
          Kliknij w bit, by zmienić liczbę
        </h6>
      </div>

      <div class="card-body">
        <form class="binary-calculator" id='binary-calculator'>
          <div class="group-number">
            <label class="display-number">
              <span class="display-number__value">0</span>
            </label>

            <label class="display-number">
              <span class="display-number__value">0</span>
            </label>

            <span class="result-1 result-bit">
                  <span class="display-number__value">0</span>
                </span>
          </div>

          <div class="group-number">
            <label class="display-number">
              <span class="display-number__value">0</span>
            </label>

            <label class="display-number">
              <span class="display-number__value">0</span>
            </label>

            <span class="result-bit">
                  <span class="display-number__value">0</span>
                </span>
          </div>

          <div class="group-number">
            <label class="display-number">
              <span class="display-number__value">0</span>
            </label>

            <label class="display-number">
              <span class="display-number__value">0</span>
            </label>

            <span class="result-3 result-bit">
                  <span class="display-number__value">0</span>
                </span>
          </div>

          <div class="group-number">
            <label class="display-number">
              <span class="display-number__value">0</span>
            </label>

            <label class="display-number">
              <span class="display-number__value">0</span>
            </label>

            <span class="result-4 result-bit">
                  <span class="display-number__value">0</span>
                </span>
          </div>

          <div class="group-number">
            <label class="display-number">
              <span class="display-number__value">0</span>
            </label>

            <label class="display-number">
              <span class="display-number__value">0</span>
            </label>

            <span class="result-5 result-bit">
                  <span class="display-number__value">0</span>
                </span>
          </div>

          <div class="group-number">
            <label class="display-number">
              <span class="display-number__value">0</span>
            </label>

            <label class="display-number">
              <span class="display-number__value">0</span>
            </label>

            <span class="result-6 result-bit">
                  <span class="display-number__value">0</span>
                </span>
          </div>

          <div class="group-number">
            <label class="display-number">
              <span class="display-number__value">0</span>
            </label>

            <label class="display-number">
              <span class="display-number__value">0</span>
            </label>

            <span class="result-7 result-bit">
                  <span class="display-number__value">0</span>
                </span>
          </div>

          <div class="group-number">
            <label class="display-15 display-number">
              <span class="display-number__value">0</span>
            </label>

            <label class="display-number">
              <span class="display-number__value">0</span>
            </label>

            <span class="result-8 result-bit">
                  <span class="display-number__value">0</span>
                </span>
          </div>

          <div class="group-number">
            <label class="display-number">
              <span class="display-number__value">0</span>
            </label>

            <label class="display-number">
              <span class="display-number__value">0</span>
            </label>

            <span class="result-9 result-bit">
                  <span class="display-number__value">0</span>
                </span>
          </div>

          <div class="operator-bar">
            <span> + </span>
          </div>
        </form>
      </div>
    </div>
`
}