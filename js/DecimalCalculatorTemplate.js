export function DecimalCalculatorTemplate() {
    document.querySelector('#decimalCalc').innerHTML = `
        <div class="card">
      <div class="card-header">
        <h5 class="card-title">Kalkulator dziesiętny</h5>
        <h6 class="card-subtitle text-muted">
          Kliknij w liczbę, by ją zmienić
        </h6>
      </div>

      <div class="card-body">
        <form class="dec-calculator" id="dec-calculator">
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
            <div class="popover bs-popover-top" style="width: 150px; top: -60px; left: -60px;">
              <div class="arrow" style="left: 55px;"></div>
              <div class="popover-body"></div>
            </div>
          </div>
        </form>
      </div>
    </div>
    `
}